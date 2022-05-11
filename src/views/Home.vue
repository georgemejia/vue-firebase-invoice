<template>
  <div>
    <InvoiceNavbar />
    <InvoiceList />
    <div v-if="isModalVisible">
      <InvoiceModal />
    </div>
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

    return { store, isModalVisible }
  }
}
</script>

