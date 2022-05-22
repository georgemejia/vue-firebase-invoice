<template>
  <div class="text-indigo-600 text-sm font-bold mb-2">Bill To</div>
  <label class="w-full block text-slate-300 text-sm mb-5" for="street">Client Name
    <input 
      class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Name"
      v-model='to.name'
    >
  </label>
  <label class="w-full block text-slate-300 text-sm mb-5" for="street">Client Email
    <input 
      class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Email"
      v-model='to.email'
    >
  </label>
  <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
    <input 
      class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address"
      v-model='to.address'
    >
  </label>
  <div class="flex mb-10">
    <label class="w-full block text-slate-300 text-sm" for="city">City
      <input 
        class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City"
        v-model='to.city'>
    </label>
    <label class="w-full block mx-3 text-slate-300 text-sm" for="code">State
      <input 
        class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="State"
        v-model='to.state'
      >
    </label>
    <label class="w-full block text-slate-300 text-sm" for="country">Zip Code
      <input 
        class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="Zipcode"
        v-model='to.zipcode'
      >
    </label>
  </div>
</template>

<script>
export default {
  props: ['to']
}
</script>
