<template>
  <div class="text-indigo-600 text-sm font-bold mb-2">Bill From</div>
    <label class="w-full block text-slate-300 text-sm mb-5" for="street">Street Address
      <input 
        class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Street Address"
        v-model='from.address'>
    </label>
    
    <div class="flex mb-10">
      <label class="w-full block text-slate-300 text-sm" for="city">City
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="city" type="text" placeholder="City"
          v-model='from.city'>
      </label>
      <label class="w-full block mx-3 text-slate-300 text-sm" for="code">Zip Code
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="code" type="text" placeholder="Code"
          v-model='from.zipcode'>
      </label>
      <label class="w-full block text-slate-300 text-sm" for="country">State
        <input 
          class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="country" type="text" placeholder="State"
          v-model='from.state'>
      </label>
    </div>
</template>

<script>
export default {
  props: ['from']
}
</script>
