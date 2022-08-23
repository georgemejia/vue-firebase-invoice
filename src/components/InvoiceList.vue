<template>
  <ul class="max-w-screen-md mx-auto">
    <InvoiceListItem 
      v-for="(invoice, index) in invoices" 
      :key="index" 
      :invoice="invoice" 
      :index="index"
    />
  </ul>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import InvoiceListItem from './InvoiceListItem.vue'
export default {
  components: { 
    InvoiceListItem 
  },
  setup() {
    const store = useStore() 
    // renders firestore collection on initial page load
    onMounted(() => {
      store.dispatch('renderFirestoreCollection')
    })
    // renders the invoices from state
    const invoices = computed(() => {
      if (store.state.invoiceType === 'Paid') return store.getters.paidInvoices 
      else if (store.state.invoiceType === 'Pending') return store.getters.pendingInvoices 
      else return store.state.invoices
    })

    return { invoices }
  }
}
</script>