<template>
  <ul class="max-w-screen-sm mx-auto">
    <InvoiceListItem 
      v-for="(invoice, index) in invoices" 
      :key="index" 
      :invoice="invoice" 
      :index="index" 
    />
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
    
    const invoices = computed(() => {
      return store.state.invoices
    })

    return { invoices }
  }
}
</script>