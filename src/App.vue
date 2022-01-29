<template>
  <main class="mt-20">
    <InvoiceNavbar />
    <InvoiceList />
    <InvoiceModal v-if="isModalVisible" />
  </main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceNavbar from './components/InvoiceNavbar.vue'
import InvoiceList from './components/InvoiceList.vue'
import InvoiceModal from './components/InvoiceModal.vue'

export default {
  components: {
    InvoiceNavbar,
    InvoiceList,
    InvoiceModal
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #111618;
}
</style>