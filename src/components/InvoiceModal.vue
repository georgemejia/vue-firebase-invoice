<template>
  <div class="w-full max-w-screen-md min-h-screen bg-slate-800 absolute top-0 left-0">
    <div class="container p-12 mx-auto">
      <InvoiceBillFrom :from="invoice.from" />
      <InvoiceBillTo :to="invoice.to" />
      <InvoiceModalItems :items="invoice.items" />

      <button 
        class="text-white font-bold rounded bg-slate-700 py-2 px-4" 
        @click="toggleModal">
        Cancel
      </button>

      <button 
        class="text-white font-bold rounded bg-indigo-600 py-2 px-4 ml-2"
        @click="saveInvoice">
        Save
      </button>

    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
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
    
    const invoice = reactive({
      from: {
        address: '',
        city: '',
        zipCode: '',
        state: '',
      },
      to: {
        name: '',
        email: '',
        address: '',
        city: '',
        zipcode: '',
        state: '',
      },
      items: []
    })

    function saveInvoice() {
      store.commit('addInvoiceToList', invoice)
      toggleModal()
    }

    function toggleModal() {
      store.commit('toggleModal')
    }

    return { invoice, store, saveInvoice, toggleModal }
  }
}
</script>