<template>
  <li>
    <div 
      class="flex justify-between items-center bg-slate-800 p-5 mt-5" 
      :class="{ 'rounded': !isInvoiceOpen, 'rounded-t': isInvoiceOpen }">
      <div class="text-white font-bold"># {{ index + 1}}</div>
      <div class="text-white">Due 20 Jan 2022</div>
      <div class="text-white">{{ invoice.to.name }}</div>
      <div class="text-white text-2xl font-bold">${{ total }}</div>
      <div class="text-green-600 text-sm font-bold bg-green-300 py-1 px-4 rounded opacity-80">&#x2022; Paid</div>
      <button class="text-white text-indigo-600 font-bold" @click="toggleInvoice">&#x27A4;</button>
    </div>
    <div v-show="isInvoiceOpen">
      <InvoiceOpened :invoice="invoice" />
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

    function toggleInvoice() {
      isInvoiceOpen.value = !isInvoiceOpen.value
    }

    const total = computed(() => {
      return props.invoice.items.total
    }) 

    return { isInvoiceOpen, toggleInvoice, total }
  }
}
</script>