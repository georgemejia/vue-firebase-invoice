<template>
  <ul class="max-w-screen-sm mx-auto" v-for="(invoice, index) in invoices" :key="index">
    <InvoiceListItem :invoice="invoice" :index="index" />
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceListItem from './InvoiceListItem.vue'
export default {
  components: { 
    InvoiceListItem
  },
  setup() {
    const store = useStore() 
    // gets the array of invoices from state to make an item
    const invoices = computed(() => {
      return store.state.invoices
    })

    return { invoices }
  }
}
</script>