<template>
  <li>
    <div class="flex justify-between items-center bg-slate-800 p-5 mt-5 cursor-pointer" @click="openInvoice">
      <div class="text-white font-bold"># {{ index + 1 }}</div>
      <div class="text-white">{{ invoice.date }}</div>
      <div class="text-white">{{ invoice.toName }}</div>
      <div class="text-white font-bold">${{ total }}</div>
      <div class="text-sm text-center font-bold py-1 px-3 rounded opacity-80 w-full w-28" :class="{ 'bg-slate-500 text-slate-700' : !isInvoicePaid, 'bg-green-400 text-green-700' : isInvoicePaid }">&#x2022; {{ status }}</div>
      <button class="text-white text-indigo-600 font-bold" @click="openMenu">&#x27A4;</button>
    </div>
    <InvoiceModal v-if="isInvoiceOpen" :invoice="invoice"  @close-invoice="closeInvoice" />
  </li>
</template>

<script>
import InvoiceModal from './InvoiceModal.vue'
import { computed, ref } from 'vue'
export default {
  components: {
    InvoiceModal
  },
  props: ['invoice', 'index'],
  setup(props) {
    const isInvoiceOpen = ref(false)
    const isInvoicePaid = ref(false)

    const openInvoice = () => isInvoiceOpen.value = !isInvoiceOpen.value
    const closeInvoice = () => isInvoiceOpen.value = !isInvoiceOpen.value

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

    return { openInvoice, closeInvoice, isInvoiceOpen, isInvoicePaid, status, toggleInvoice, markAsPaid, total }
  }
}
</script>