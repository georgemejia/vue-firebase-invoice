<template>
  <div class="max-w-screen-sm mx-auto bg-slate-800 rounded-b">

    <div class="p-5">
      <div class="mb-10">
        <p class="text-indigo-600 font-bold mb-2 text-lg">From:</p>
        <p class="text-white font-bold">Name:</p>
        <p class="text-white">{{ invoice.from.name }}</p>
        <br>
        <p class="text-white font-bold">Email:</p>
        <p class="text-white">{{ invoice.from.email }}</p>
      </div>

      <div class="flex justify-between">
        <div>
          <p class="text-indigo-600 font-bold mb-2 text-lg">To:</p>
          <p class="text-white font-bold">Name:</p>
          <p class="text-white">{{ invoice.to.name }}</p>
          <br>
          <p class="text-white font-bold">Email:</p>
          <p class="text-white">{{ invoice.to.email }}</p>
          <br>
          <p class="text-white font-bold">Address</p>
          <p class="text-white">{{ invoice.to.address }}</p>
          <p class="text-white">{{ invoice.to.city }}</p>
          <p class="text-white">{{ invoice.to.zipcode }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center p-5">
      <div>
        <button 
          class="text-white bg-red-500 py-2 px-3 rounded"
          @click="deleteInvoice">
          Delete
        </button>
        <button 
          class="text-white bg-indigo-600 py-2 px-3 ml-2 rounded" 
          @click="updateStatus">
          Mark as Paid
        </button>
        <button class="text-white bg-slate-700 py-2 px-3 ml-2 rounded">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['invoice', 'index'],
  setup(props, { emit }) {
    const store = useStore()
    
    // emits an event to change the status of the selected invoice
    function updateStatus() {
      emit('updateStatus')
    }

    // commits to the store function that deletes the selected invoice
    function deleteInvoice() {
      store.commit('deleteInvoice', props.index)
    }

    return { updateStatus, deleteInvoice }
  }
}
</script>

