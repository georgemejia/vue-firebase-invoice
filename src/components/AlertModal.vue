<template>
  <div class="bg-white rounded p-5 max-w-md absolute top-2/4 ">
   <p class="mb-5">Are you sure you want to delete this invoice?</p>
   <button class="text-white bg-slate-500 py-2 px-3 mr-2 rounded" @click="toggleAlertModal">Cancel</button>
   <button class="text-white bg-red-500 py-2 px-3 rounded" @click="deleteInvoice">Delete</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
   props: ['index'],
   setup(props) {
      const store = useStore() 
      // deletes invoice
      function deleteInvoice() {
         store.commit('DELETE_INVOICE', props.index)
         toggleAlertModal()
      }
      // toggles the alert modal
      function toggleAlertModal() {
         store.commit('TOGGLE_ALERT_MODAL')
      }
      return { deleteInvoice, toggleAlertModal }
   }
}
</script>

<style>

</style>