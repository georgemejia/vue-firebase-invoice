<template>
  <li class="flex justify-between items-center mb-5 bg-slate-800 p-5 rounded">
    <div class="text-white font-bold"># {{ index + 1}}</div>
    <div class="text-white">Due 20 Jan 2022</div>
    <div class="text-white">{{ invoice.to.name }}</div>
    <div class="text-white text-2xl font-bold">$5,000</div>
    <div class="text-green-600 text-sm font-bold bg-green-300 py-1 px-4 rounded opacity-80">&#x2022; Paid</div>
    <router-link to='/invoice/:invoice' class="text-white text-indigo-600 font-bold" @click="log(index)">&#x27A4;</router-link>
  </li>
</template>

<script>
export default {
  props: ['invoice', 'index'],
  setup() {
    function log(index) {
      console.log(index)
    }

    return { log }
  }
}
</script>