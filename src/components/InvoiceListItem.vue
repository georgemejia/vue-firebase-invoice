<template>
  <li>
    <div 
      class="flex justify-between items-center bg-slate-800 p-5 mt-5" 
      :class="{ 'rounded': !isInvoiceOpen, 'rounded-t': isInvoiceOpen }">
      <div class="text-white font-bold"># {{ index + 1}}</div>
      <div class="text-white">Due 20 Jan 2022</div>
      <div class="text-white">{{ invoice.to.name }}</div>
      <div class="text-white font-bold">${{ total }}</div>
      <div 
        class="text-sm font-bold py-1 px-4 rounded opacity-80"
        :class="{ 'bg-slate-500 text-slate-700' : !isInvoicePaid, 'bg-green-400 text-green-700' : isInvoicePaid }">
        &#x2022; {{ status }}
      </div>
      <button class="text-white text-indigo-600 font-bold" @click="toggleInvoice">&#x27A4;</button>
    </div>
    <div v-show="isInvoiceOpen">
      <InvoiceOpened 
        :invoice="invoice" 
        :index="index"  
        @update-status="markAsPaid" 
      />
    </div>
  </li>
</template>

<script>
import InvoiceOpened from './InvoiceOpened.vue'
import { computed, ref } from 'vue'
export default {
  components: {
    InvoiceOpened
  },
  props: ['invoice', 'index'],
  setup(props) {
    const isInvoiceOpen = ref(false)
    const isInvoicePaid = ref(false)

    const total = computed(() => {
      const invoiceTotals = props.invoice.items.map((item) => {
        return item.total
      })

      let sum = 0
      for (let i = 0; i < invoiceTotals.length; i++) {
        sum+=invoiceTotals[i]
      }
      
      return sum
    })

    function toggleInvoice() {
      isInvoiceOpen.value = !isInvoiceOpen.value
    }

    function markAsPaid() {
      isInvoicePaid.value = true
      if (isInvoicePaid) {
        props.invoice.status = 'Paid'
      }
    }

    const status = computed(() => {
      return props.invoice.status
    }) 

    return { isInvoiceOpen, isInvoicePaid, status, toggleInvoice, markAsPaid, total }
  }
}
</script>