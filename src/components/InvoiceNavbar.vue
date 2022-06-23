<template>
  <div class="max-w-screen-sm mx-auto mb-10 flex justify-between items-center">
    <div>
      <h1 class="text-white text-4xl font-bold mb-2">Invioces</h1>
      <p class="text-white">There are {{ invoices.length }} total invoices</p>
    </div>
    <div class="flex items-center">
      <p class="text-white mr-5">Filter by status</p>
      <button class="text-white font-bold bg-indigo-600 p-3 rounded" @click="createNewInvoice">New Invoice +</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    // renders invoices array
    const invoices = computed(() => {
      return store.state.invoices
    })
    // toggles modal to create new invoice
    function createNewInvoice() {
      store.commit('TOGGLE_MODAL')
      store.state.isAddButtonVisible = true
      store.state.isUpdateButtonVisible = false
    }

    return { invoices, createNewInvoice }
  }
}
</script>