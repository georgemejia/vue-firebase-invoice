<template>
  <div class="w-full max-w-screen-md h-full bg-slate-800 absolute top-0 left-0">
    <div class="container p-12 mx-auto">

      <div class="text-indigo-600 text-sm font-bold mb-2">Bill From</div>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address">
      </label>
      
      <div class="flex mb-10">
        <label class="w-full block text-slate-300 text-sm" for="city">City
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City">
        </label>
        <label class="w-full block mx-3 text-slate-300 text-sm" for="code">Area Code
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="Code">
        </label>
        <label class="w-full block text-slate-300 text-sm" for="country">State
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="State">
        </label>
      </div>
      
      <div class="text-indigo-600 text-sm font-bold mb-2">Bill To</div>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Client Name
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Name">
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Client Email
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Email">
      </label>
      <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
        <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address">
      </label>

      <div class="flex mb-10">
        <label class="w-full block text-slate-300 text-sm" for="city">City
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City">
        </label>
        <label class="w-full block mx-3 text-slate-300 text-sm" for="code">Area Code
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="Code">
        </label>
        <label class="w-full block text-slate-300 text-sm" for="country">State
          <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="State">
        </label>
      </div>

      <button 
        class="text-white font-bold rounded bg-indigo-600 py-2 px-4"
        @click="close">
        Cancel
      </button>

    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeModal'],
  setup(props, { emit }) {

    function close() {
      emit('closeModal')
    }

    return { close }
  }
}
</script>

<style>
</style>