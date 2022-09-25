<template>
  <div class="w-full max-w-screen-md min-h-screen bg-slate-800 absolute z-20 top-0 left-0">
    <div class="container p-12 mx-auto">
      <!-- <InvoiceBillFrom :from="newInvoice.from" />
      <InvoiceBillTo :to="newInvoice.to" />
      <InvoiceModalItems :items="newInvoice.items" /> -->
      <div class="text-indigo-600 text-sm font-bold mb-2">Bill From</div>
      <label class="w-full block text-slate-300 text-sm mb-5" for="name">Name
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="name" type="text" placeholder="Name" v-model='invoice.fromName' required>
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Email
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Email" v-model='invoice.fromEmail' required>
      </label>

      <div class="text-indigo-600 text-sm font-bold mb-2">Bill To</div>
      <label class="w-full block text-slate-300 text-sm mb-5" for="name">Client Name
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="name" type="text" placeholder="Name" v-model='invoice.toName'>
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="email">Client Email
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="email" type="text" placeholder="Email" v-model='invoice.toEmail'>
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address" v-model='invoice.toAddress'>
      </label>
      <div class="flex mb-10">
        <label class="w-full block text-slate-300 text-sm" for="city">City
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City" v-model='invoice.toCity'>
        </label>
        <label class="w-full block mx-3 text-slate-300 text-sm" for="code">State
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="State" v-model='invoice.toState'>
        </label>
        <label class="w-full block text-slate-300 text-sm" for="country">Zip Code
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="Zipcode" v-model='invoice.toZipcode'>
        </label>
      </div>

      <InvoiceFormItems :items="invoice.items" />

      <InvoiceFormButton class="bg-slate-700" @click="closeForm">Cancel</InvoiceFormButton>
      <InvoiceFormButton v-if="isAddButtonVisible" class="bg-indigo-600 ml-2" @click="addNewInvoice">Save</InvoiceFormButton>
      <InvoiceFormButton v-if="isUpdateButtonVisible" class="bg-indigo-600 ml-2" @click="updateInvoice(invoice.id)">Update</InvoiceFormButton>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import InvoiceBillFrom from './InvoiceBillFrom.vue'
import InvoiceBillTo from './InvoiceBillTo.vue'
import InvoiceFormItems from './InvoiceFormItems.vue'
import InvoiceFormButton from './InvoiceFormButton.vue'
export default {
  components: {
    InvoiceBillFrom,
    InvoiceBillTo,
    InvoiceFormItems,
    InvoiceFormButton
  },
  setup() {
    const store = useStore()
    // models form inputs with store object
    const invoice = computed({
      get() {
        return store.state.invoice
      },
      set(value) {
        store.commit('FILL_INVOICE_FORM', value)
      }
    })
    // function adds new invoice to invoices array
    const addNewInvoice = () => {
      store.dispatch('addInvoiceToFirestoreCollection')
      store.commit('toggleForm')
    }
    // renders the state of the add button
    const isAddButtonVisible = computed(() => store.state.isAddButtonVisible)
    // renders the state of the update button
    const isUpdateButtonVisible = computed(() => store.state.isUpdateButtonVisible)
    // updates invoice
    const updateInvoice = (id) => {
      alert('Are you sure you want to update this invoice?')
      store.dispatch('updateInvoice', id)
      store.commit('toggleForm')
    }

    const closeForm = () => {
      store.commit('clearInvoice')
      store.commit('toggleForm')
    }

    return { invoice, addNewInvoice, isAddButtonVisible, isUpdateButtonVisible, updateInvoice, closeForm }
  }
}
</script>