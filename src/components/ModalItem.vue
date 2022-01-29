<template>
  <div class="col-span-2">
    <input class="block w-full bg-slate-700 rounded text-white text-base p-2" type="text" v-model="item.name">
  </div>
  <div>
    <input class="block w-full bg-slate-700 rounded text-white p-2" type="text" v-model="item.quantity">
  </div>
  <div>
    <input class="block w-full bg-slate-700 rounded text-white p-2" type="text" v-model="item.price">
  </div>
  <div>
    <div class="text-white">$45</div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
