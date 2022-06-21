<template>
  <div>
    <InvoiceNavbar />
    <InvoiceList />
    <div v-if="isModalVisible">
      <InvoiceModal />
    </div>
    <div v-if="isModalVisibleEdit">
      <InvoiceModalEdit />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceNavbar from '../components/InvoiceNavbar.vue'
import InvoiceList from '../components/InvoiceList.vue'
import InvoiceModal from '../components/InvoiceModal.vue'
import InvoiceModalEdit from '../components/InvoiceModalEdit.vue'

export default {
  components: {
    InvoiceNavbar,
    InvoiceList,
    InvoiceModal,
    InvoiceModalEdit
  },
  setup() {
    const store = useStore()
    
    const isModalVisible = computed(() => {
      return store.state.isModalVisible
    })

    const isModalVisibleEdit = computed(() => {
      return store.state.isModalVisibleEdit
    })

    return { store, isModalVisible, isModalVisibleEdit }
  }
}
</script>

