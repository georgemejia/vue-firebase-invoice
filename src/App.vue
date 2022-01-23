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
import { ref } from 'vue'
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
    let isModalVisible = ref(false)

    function showModal() {
      isModalVisible.value = true
    }

    function closeModal() {
      isModalVisible.value = false
    }

    return { isModalVisible, showModal, closeModal }
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