<template>
  <div class="w-full max-w-screen-md min-h-screen bg-slate-800 absolute top-0 left-0">
    <div class="container p-12 mx-auto">
      <InvoiceBillFrom :from="newInvoice.from" />
      <InvoiceBillTo :to="newInvoice.to" />
      <InvoiceModalItems :items="newInvoice.items" />
      <button class="text-white font-bold rounded bg-slate-700 py-2 px-4" @click="toggleModal">Cancel</button>
      <button v-if="isAddButtonVisible" class="text-white font-bold rounded bg-indigo-600 py-2 px-4 ml-2" @click="addNewInvoice">Save</button>
      <button v-if="isUpdateButtonVisible" class="text-white font-bold rounded bg-indigo-600 py-2 px-4 ml-2" @click="updateInvoice">Update</button>
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
    // models form inputs with store object
    const newInvoice = computed({
      get() {
        return store.state.newInvoice
      },
      set(value) {
        store.commit('FILL_NEW_INVOICE_FORM', value)
      }
    })
    // function adds new invoice to invoices array
    const addNewInvoice = () => {
      // store.commit('ADD_NEW_INVOICE')
      store.dispatch('addInvoiceToCollection')
      toggleModal()
    }
    // toggles modal 
    function toggleModal() {
      store.commit('toggleModal')
    }
    // renders the state of the add button
    const isAddButtonVisible = computed(() => store.state.isAddButtonVisible)
    // renders the state of the update button
    const isUpdateButtonVisible = computed(() => store.state.isUpdateButtonVisible)
    // updates invoice
    function updateInvoice() {
      alert('Are you sure you want to update this invoice?')
      store.commit('UPDATE_INVOICE')
      toggleModal()
    }

    return { newInvoice, addNewInvoice, isAddButtonVisible, isUpdateButtonVisible, toggleModal, updateInvoice }
  }
}
</script>