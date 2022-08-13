<template>
  <div class="max-w-screen-sm mx-auto mb-10 flex justify-between items-center">
    <div>
      <h1 class="text-white text-4xl font-bold mb-2">Invioces</h1>
      <p class="text-white">There are {{ invoicesCount }} total invoices</p>
    </div>
    <div class="flex items-center">
      <p class="text-white mr-5">Filter by status</p>
      <button class="text-white font-bold bg-indigo-600 p-3 rounded" @click="createNewInvoice">New Invoice +</button>
    </div>
    <button class="text-white underline" @click="handleSignOut">Sign Out</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    // renders the total count of invoices
    const invoicesCount = computed (() => store.getters.invoicesCount)
    // toggles modal to create new invoice
    const createNewInvoice = () => {
      store.commit('toggleModal')
      store.state.isAddButtonVisible = true
      store.state.isUpdateButtonVisible = false
    }
    // handles signing out user
    const handleSignOut = () => {
      store.dispatch('signOut')
    }

    return { invoicesCount, createNewInvoice, handleSignOut }
  }
}
</script>