<template>
  <div class="text-indigo-600 text-sm font-bold mb-2">Bill From</div>
  <label class="w-full block text-slate-300 text-sm mb-5" for="name">Name
    <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="name" type="text" placeholder="Name" v-model='from.name' required>
  </label>
  <label class="w-full block text-slate-300 text-sm mb-5" for="street">Email
    <input class="w-full bg-slate-700 block p-2 mt-2 rounded placeholder:text-sm" id="street" type="text" placeholder="Email" v-model='from.email' required>
  </label>
</template>

<script>
export default {
  props: ['from']
}
</script>
