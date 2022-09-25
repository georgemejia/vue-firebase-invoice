<template>
  <div>
    <InvoiceNavbar />
    <InvoiceList />
    <InvoiceForm v-if="isFormOpen" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import InvoiceNavbar from '../components/InvoiceNavbar.vue'
import InvoiceList from '../components/InvoiceList.vue'
import InvoiceForm from '../components/InvoiceForm.vue'
import { auth } from '../firebase'

export default {
  components: {
    InvoiceNavbar,
    InvoiceList,
    InvoiceForm,
  },
  setup() {
    const store = useStore()
    // renders the modal state
    const isFormOpen = computed(() => store.state.isFormOpen)
    
    onMounted(() => {
      store.dispatch('setUser')
    })

    return { store, isFormOpen }
  }
}
</script>

