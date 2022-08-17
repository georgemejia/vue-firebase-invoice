<template>
  <div class="max-w-screen-sm mx-auto top-0 right-0 left-0 bottom-0 bg-slate-800 rounded-b p-12 absolute z-10">
    <p class="text-white underline mb-20 cursor-pointer" @click="closeInvoice">Go Back</p>
    <h1 class="text-white text-4xl mb-1">Invoice</h1>
    <p class="text-white text-sm mb-20">Date: {{ invoice.date }}</p>
    <!-- starts the invoice contact information -->
    <div class="flex justify-between mb-20">
      <div>
        <h2 class="text-indigo-600 font-bold mb-2 text-lg">From:</h2>
        <p class="text-white font-bold">Name:</p>
        <p class="text-white text-sm mb-5">{{ invoice.fromName }}</p>
        <p class="text-white font-bold">Email:</p>
        <p class="text-white text-sm">{{ invoice.fromEmail }}</p>
      </div>
      <div>
        <h2 class="text-indigo-600 font-bold mb-2 text-lg">To:</h2>
        <div class="flex justify-between">
          <div class="mr-10">
            <p class="text-white font-bold">Name:</p>
            <p class="text-white text-sm mb-5">{{ invoice.toName }}</p>
            <p class="text-white font-bold">Email:</p>
            <p class="text-white text-sm">{{ invoice.toEmail }}</p>
          </div>
          <div>
            <p class="text-white font-bold">Address:</p>
            <p class="text-white text-sm">{{ invoice.toAddress }}</p>
            <p class="text-white text-sm">{{ invoice.toCity }}</p>
            <p class="text-white text-sm">{{ invoice.toZipcode }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ends invoice contact information -->
    <!-- starts invoice items information -->
    <div class="bg-slate-700 mb-5 py-5 px-3 rounded">
      <div class="grid grid-cols-5">
        <h3 class="text-white font-bold col-span-2 ">Items Description</h3>
        <h3 class="text-white font-bold text-center">Quantity</h3>
        <h3 class="text-white font-bold text-center">Price</h3>
        <h3 class="text-white font-bold text-center">Total</h3>
      </div>
      <div class="grid grid-cols-5 mt-5" v-for="(item, index) in invoice.items" :key="index">
        <p class="text-white text-sm col-span-2">{{ item.name}}</p>
        <p class="text-white text-sm text-center">{{ item.quantity}}</p>
        <p class="text-white text-sm text-center">{{ item.price}}</p>
        <p class="text-white text-sm text-center">{{ item.total }}</p>
      </div>
    </div>
    <!-- ends invoice items information -->
    <!-- starts total price -->
    <h2 class="text-end text-xl text-white font-bold mb-20">Total: {{ total }}</h2>
    <!-- ends total price -->
    <!-- starts buttons -->
    <div class="flex items-center">
      <div>
        <button class="text-white bg-red-500 py-2 px-3 rounded" @click="deleteInvoice(invoice.id)">Delete</button>
        <button class="text-white bg-indigo-600 py-2 px-3 ml-2 rounded" @click="updateStatus">Mark as Paid</button>
        <button class="text-white bg-slate-700 py-2 px-3 ml-2 rounded" @click="editInvoice">Edit</button>
      </div>
    </div>
    <!-- ends buttons -->
    <AlertModal 
      v-if="isAlertModalVisible"
      :index="index"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AlertModal from './AlertModal.vue'
export default {
  props: ['invoice', 'index'],
  components: { AlertModal },
  setup(props, { emit }) {
    const store = useStore()
    const isAlertModalVisible = computed(() => store.state.isAlertModalVisible)
    const isInvoiceDeletionAllowed = computed(() => store.state.isInvoiceDeletionAllowed)
    // emits event to close the invoice modal
    const closeInvoice = () => emit('closeInvoice')
    // deletes the selected invoice
    const deleteInvoice = (id) => store.dispatch('deleteInvoiceFromFirestoreCollection', id)

    // emits an event to change the status of the selected invoice
    function updateStatus() {
      emit('updateStatus')
    }
    // toggles modal and fills form with selected invoice information
    function editInvoice() {
      store.commit('toggleModal')
      store.commit('FILL_NEW_INVOICE_FORM', props.invoice)
      store.state.isUpdateButtonVisible = true
      store.state.isAddButtonVisible = false
    }
    // renders the total amount for all the total items in an invoice (not part of the object)
    const total = computed(() => {
      const invoiceTotals = props.invoice.items.map((item) => {
        return item.total
      })

      let sum = 0
      for (let i = 0; i < invoiceTotals.length; i++) {
        sum+=invoiceTotals[i]
      }
      
      return sum
    })

    return { closeInvoice, updateStatus, deleteInvoice, editInvoice, total, isAlertModalVisible, isInvoiceDeletionAllowed }
  }
}
</script>

