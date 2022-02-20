<template>
  <div class="max-w-screen-sm mx-auto bg-slate-800 rounded-b">

    <div class="p-5">
      <div class="flex justify-between mb-10">
        <p class="text-indigo-600 font-bold">From:</p>
        <div class="text-right">
          <p class="text-white font-bold">Address:</p>
          <p class="text-white">{{ invoice.from.address }}</p>
          <p class="text-white">{{ invoice.from.city }}</p>
          <p class="text-white">{{ invoice.from.zipcode }}</p>
        </div>
      </div>

      <div class="flex justify-between">
        <div>
          <p class="text-indigo-600 font-bold mb-2">To:</p>
          <p class="text-white font-bold">Name:</p>
          <p class="text-white mb-2">{{ invoice.to.name }}</p>
          <p class="text-white font-bold">Email:</p>
          <p class="text-white">{{ invoice.to.email }}</p>
        </div>
        
        <div class="text-right">
          <p class="text-white font-bold">Address</p>
          <p class="text-white">{{ invoice.to.address }}</p>
          <p class="text-white">{{ invoice.to.city }}</p>
          <p class="text-white">{{ invoice.to.zipcode }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center p-5">
      <div>
        <button class="text-white bg-red-500 py-2 px-3 rounded">Delete</button>
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
export default {
  props: ['invoice'],
  setup(props, { emit }) {
    function closeInvoice() {
      emit('closeInvoice')
    }
    
    function updateStatus() {
      emit('updateStatus')
    }

    return { closeInvoice, updateStatus }
  }
}
</script>

