<template>
  <div class="w-full max-w-screen-md min-h-screen bg-slate-800 absolute top-0 left-0">
    <div class="container p-12 mx-auto">

      <div class="text-indigo-600 text-sm font-bold mb-2">Bill From</div>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address"
          v-model='invoice.billFromAddress'
        >
      </label>
      
      <div class="flex mb-10">
        <label class="w-full block text-slate-300 text-sm" for="city">City
          <input 
            class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City"
            v-model='invoice.billFromCity'
          >
        </label>
        <label class="w-full block mx-3 text-slate-300 text-sm" for="code">Zip Code
          <input 
            class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="Code"
            v-model='invoice.billFromZipCode'
          >
        </label>
        <label class="w-full block text-slate-300 text-sm" for="country">State
          <input 
            class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="State"
            v-model='invoice.billFromState'
          >
        </label>
      </div>
      <!-- Bill To -->
      <div class="text-indigo-600 text-sm font-bold mb-2">Bill To</div>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Client Name
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Name"
          v-model='invoice.billToName'  
        >
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Client Email
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Email"
          v-model='invoice.billToEmail'
        >
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address"
          v-model='invoice.billToAddress'  
        >
      </label>

      <div class="flex mb-10">
        <label class="w-full block text-slate-300 text-sm" for="city">City
          <input 
            class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City"
            v-model='invoice.billToCity'
          >
        </label>
        <label class="w-full block mx-3 text-slate-300 text-sm" for="code">Zip Code
          <input 
            class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="Code"
            v-model='invoice.billToZipCode'
          >
        </label>
        <label class="w-full block text-slate-300 text-sm" for="country">State
          <input 
            class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="State"
            v-model='invoice.billToState'
          >
        </label>
      </div>

      <InvoiceModalItems />

      <button 
        class="text-white font-bold rounded bg-indigo-600 py-2 px-4"
        @click="toggleModal">
        Cancel
      </button>

      <button 
        class="text-white font-bold rounded bg-indigo-600 py-2 px-4 ml-2"
        @click="save">
        Save
      </button>

    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import InvoiceModalItems from './InvoiceModalItems.vue'
export default {
  emits: ['closeModal'],
  components: {
    InvoiceModalItems
  },
  setup(props, { emit }) {
    const store = useStore()
    
    const invoice = reactive({
      billFromAddress: '',
      billFromCity: '',
      billFromZipCode: '',
      billFromState: '',
      billToName: '',
      billToEmail: '',
      billToAddress: '',
      billToCity: '',
      billToZipCode: '',
      billToState: ''
    })

    function save() {
      store.commit('addInvoiceToList', invoice)
      toggleModal()
    }

    function toggleModal() {
      store.commit('toggleModal')
    }

    return { invoice, store, close, save, toggleModal }
  }
}
</script>

<style>
</style>