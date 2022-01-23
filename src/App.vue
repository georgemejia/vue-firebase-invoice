<template>
  <main class="mt-20">
    <InvoiceNavbar @open-modal="showModal" />
    <ul class="max-w-screen-sm mx-auto">
      <InvoiceItem />
    </ul>
    <InvoiceModal v-if="isModalVisible" @close-modal="closeModal" />
  </main>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceNavbar from './components/InvoiceNavbar.vue'
import InvoiceItem from './components/InvoiceItem.vue'
import InvoiceModal from './components/InvoiceModal.vue'

export default {
  components: {
    InvoiceNavbar,
    InvoiceItem,
    InvoiceModal
  },
  setup() {
    const store = useStore()

    const isModalVisible = computed(() => {
      return store.state.isModalVisible
    })

    function showModal() {
      store.commit('showModal')
    }

    function closeModal() {
      store.commit('closeModal')
    }

    return { store, isModalVisible, showModal, closeModal }
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