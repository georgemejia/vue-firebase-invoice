<template>
   <div class="flex items-center">
      <div>
         <button class="text-white bg-red-500 py-2 px-3 rounded" @click="deleteInvoice(invoice.id)">Delete</button>
         <button class="text-white bg-indigo-600 py-2 px-3 ml-2 rounded" @click="markAsPaid(invoice.id)">Mark as Paid</button>
         <button class="text-white bg-slate-700 py-2 px-3 ml-2 rounded" @click="editInvoice">Edit</button>
      </div>
   </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
   props: ['invoice'],
   setup(props, { emit }) {
      const store = useStore()
      // deletes the selected invoice
      const deleteInvoice = (id) => {
         store.dispatch('deleteInvoiceFromFirestoreCollection', id)
         // store.commit('toggleInvoice')
         emit('closeInvoice')
      }
      // updates the status of the selected invoice
      const markAsPaid = (id) => store.dispatch('markInvoiceAsPaid', id)
      // toggles modal and fills form with selected invoice information
      const editInvoice = () => {
         store.commit('toggleForm')
         store.commit('FILL_INVOICE_FORM', props.invoice)
         store.state.isUpdateButtonVisible = true
         store.state.isAddButtonVisible = false
      }
      return { deleteInvoice, markAsPaid, editInvoice }
   }
}
</script>

<style>

</style>