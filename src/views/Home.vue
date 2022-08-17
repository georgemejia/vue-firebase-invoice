<template>
  <div>
    <InvoiceNavbar />
    <InvoiceList />
    <div v-if="isFormModalVisible">
      <InvoiceFormModal />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceNavbar from '../components/InvoiceNavbar.vue'
import InvoiceList from '../components/InvoiceList.vue'
import InvoiceFormModal from '../components/InvoiceFormModal.vue'

export default {
  components: {
    InvoiceNavbar,
    InvoiceList,
    InvoiceFormModal,
  },
  setup() {
    const store = useStore()
    // renders the modal state
    const isFormModalVisible = computed(() => store.state.isModalVisible)

    return { store, isFormModalVisible }
  }
}
</script>

