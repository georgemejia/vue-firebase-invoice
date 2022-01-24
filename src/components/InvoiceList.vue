<template>
  <ul class="max-w-screen-sm mx-auto" v-for="invoice in invoices" :key="invoice.length">
    <InvoiceItemPreview :invoice="invoice" />
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceItemPreview from './InvoiceItemPreview.vue'
export default {
  components: { 
    InvoiceItemPreview
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