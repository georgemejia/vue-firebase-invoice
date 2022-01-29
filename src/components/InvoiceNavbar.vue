<template>
  <div class="max-w-screen-sm mx-auto mb-10 flex justify-between items-center">
    <div>
      <h1 class="text-white text-4xl font-bold mb-2">Invioces</h1>
      <p class="text-white">There are 5 total invoices</p>
    </div>
    <div class="flex items-center">
      <p class="text-white mr-5">Filter by status</p>
      <button class="text-white font-bold bg-indigo-600 p-3 rounded" @click="toggleModal">New Invoice +</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    function toggleModal() {
      store.commit('toggleModal')
    }

    return { toggleModal }
  }
}
</script>