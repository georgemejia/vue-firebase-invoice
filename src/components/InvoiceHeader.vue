<template>
   <div>
      <p class="text-white underline mb-20 cursor-pointer" @click="closeInvoice">Go Back</p>
      <h1 class="text-white font-bold text-4xl mb-1">Invoice</h1>
      <p class="text-white text-sm mb-10">Created: {{ invoice.date }}</p>
      <div class="text-sm text-center font-bold py-1 px-3 w-24 rounded opacity-80 bg-slate-500 text-slate-700 mb-20" :class="setStatusColor">&#x2022; {{ invoice.status }}</div>
   </div>
</template>

<script>
import { computed } from 'vue'
export default {
   props: ['invoice'],
   setup(props, { emit }) {
      const closeInvoice = () => emit('closeInvoice')
      const setStatusColor = computed(() => ({
         'bg-green-300': props.invoice.status === 'Paid',
         'bg-slate-500': props.invoice.status === 'Pending'
      }))
      return { closeInvoice, setStatusColor }
   }
}
</script>