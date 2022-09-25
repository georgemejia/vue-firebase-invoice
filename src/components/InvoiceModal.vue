<template>
  <div class="max-w-4xl mx-auto left-0 right-0 top-0 bottom-0 bg-slate-800 rounded-b p-12 absolute z-10">
    <InvoiceHeader :invoice="invoice" @close-invoice="closeInvoice" />
    <InvoiceContact :invoice="invoice" />
    <InvoiceItems :invoice="invoice" />
    <InvoiceButtons :invoice="invoice" />
  </div>
</template>

<script>
import InvoiceHeader from './InvoiceHeader.vue'
import InvoiceContact from './InvoiceContact.vue'
import InvoiceItems from './InvoiceItems.vue'
import InvoiceButtons from './InvoiceButtons.vue'
export default {
  props: ['invoice', 'index'],
  components: {
    InvoiceHeader,
    InvoiceContact,
    InvoiceItems,
    InvoiceButtons
  },
  setup(props, { emit }) {
    const closeInvoice = () => emit('closeInvoice')
    return { closeInvoice }
  }
}
</script>

