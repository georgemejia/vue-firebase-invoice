<template>
  <li class="rounded bg-slate-800 mt-5 p-5">
    <div class="flex justify-between items-center cursor-pointer" @click="openInvoice">
      <div class="text-white font-bold"># {{ index + 1 }}</div>
      <div class="text-white">{{ invoice.date }}</div>
      <div class="text-white">{{ invoice.toName }}</div>
      <div class="text-white font-bold">${{ total }}</div>
      <div class="text-sm font-bold py-1 px-3 rounded opacity-80 text-slate-700" :class="setStatusColor">&#x2022; {{ invoice.status }}</div>
      <button class="text-white text-indigo-600 font-bold" @click="openMenu">&#x27A4;</button>
    </div>
    <InvoiceModal v-if="isInvoiceOpen" :invoice="invoice" @close-invoice="closeInvoice" />
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
    const openInvoice = () => isInvoiceOpen.value = true
    const closeInvoice = () => isInvoiceOpen.value = false

    const setStatusColor = computed(() => ({
      'bg-green-300': props.invoice.status === 'Paid',
      'bg-slate-500': props.invoice.status === 'Pending'
    }))

    const total = computed(() => {
      const invoiceTotals = props.invoice.items.map((item) => item.total)

      let sum = 0
      for (let i = 0; i < invoiceTotals.length; i++) {
        sum+=invoiceTotals[i]
      }
      
      return sum
    })

    return { isInvoiceOpen, openInvoice, closeInvoice, setStatusColor, total }
  }
}
</script>