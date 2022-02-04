<template>
  <div>
    <InvoiceNavbar />
    <InvoiceList v-if="invoices" />
    <InvoiceModal v-if="isModalVisible" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceNavbar from '../components/InvoiceNavbar.vue'
import InvoiceList from '../components/InvoiceList.vue'
import InvoiceModal from '../components/InvoiceModal.vue'

export default {
  components: {
    InvoiceNavbar,
    InvoiceList,
    InvoiceModal,
  },
  setup() {
    const store = useStore()
    
    const isModalVisible = computed(() => {
      return store.state.isModalVisible
    })

    const invoices = computed(() => {
      return store.state.invoices.length > 0
    })

    return { store, isModalVisible, invoices}
  }
}
</script>

<style>

</style>