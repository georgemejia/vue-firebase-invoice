<template>
  <div class="max-w-screen-md mx-auto mb-10 flex justify-between items-center">
    <div>
      <h1 class="text-white text-4xl font-bold mb-2">Invoices</h1>
      <p class="text-white">There are {{ invoicesCount }} total invoices</p>
    </div>
    <div class="flex items-center">
      <label class="text-white mr-2" for="filter">Filter:</label>
      <select class="bg-white cursor-pointer" name="pets" id="filter" @click="changeInvoiceType" v-model="filter">
        <option v-for="(filter, index) in filters" :key="index" :value="filter.value">{{ filter.text }}</option>
      </select>
      <button class="text-white font-bold bg-indigo-600 p-3 rounded ml-10" @click="createNewInvoice">New Invoice +</button>
    </div>
    <!-- <button class="text-white underline" @click="handleSignOut">Sign Out</button> -->
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const filter = ref('All')
    const filters = ref([
      { text: 'All', value: 'All'},
      { text: 'Paid', value: 'Paid'},
      { text: 'Pending', value: 'Pending'}
    ])
    // renders the total count of invoices
    const invoicesCount = computed(() => store.getters.invoicesCount)
    // toggles modal to create new invoice
    const createNewInvoice = () => {
      store.commit('toggleForm')
      store.state.isAddButtonVisible = true
      store.state.isUpdateButtonVisible = false
    }
    // handles signing out user
    const handleSignOut = () => store.dispatch('signOut')
    // handles filtering invoices
    const changeInvoiceType = () => {
      store.commit('changeInvoiceType', filter.value)
    }

    return { filter, filters, invoicesCount, createNewInvoice, handleSignOut, changeInvoiceType }
  }
}
</script>