<template>
  <div class="w-full max-w-screen-md min-h-screen bg-slate-800 absolute top-0 left-0">
    <div class="container p-12 mx-auto">
      <InvoiceBillFrom :from="invoice.from" />
      <InvoiceBillTo :to="invoice.to" />
      <InvoiceModalItems :items="invoice.items" />

      <button 
        class="text-white font-bold rounded bg-slate-700 py-2 px-4" 
        @click="toggleModalEdit">
        Cancel
      </button>

      <button 
        class="text-white font-bold rounded bg-indigo-600 py-2 px-4 ml-2"
        @click="updateInvoice">
        Save
      </button>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceBillFrom from './InvoiceBillFrom.vue'
import InvoiceBillTo from './InvoiceBillTo.vue'
import InvoiceModalItems from './InvoiceModalItems.vue'
export default {
  components: {
    InvoiceBillFrom,
    InvoiceBillTo,
    InvoiceModalItems
  },
  setup() {
    const store = useStore()

    const invoice = computed(() => {
      return store.state.editedInvoice
    })

    function updateInvoice() {
      console.log('updated')
    }

    // toggles the modal from store
    function toggleModalEdit() {
      store.commit('toggleModalEdit')
    }

    return { invoice, updateInvoice, toggleModalEdit }
  }
}
</script>

<style>

</style>