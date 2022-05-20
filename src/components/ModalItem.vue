<template>
  <div class="col-span-2">
    <input class="block w-full bg-slate-700 rounded text-white text-sm p-2" type="text" v-model="item.name">
  </div>

  <div>
    <input class="block w-full bg-slate-700 rounded text-white text-sm p-2" type="text" v-model.number="item.quantity">
  </div>

  <div>
    <input class="block w-full bg-slate-700 rounded text-white text-sm p-2" type="text" v-model.number="item.price">
  </div>
  
  <div>
    <div class="text-white">{{ item.total = item.quantity * item.price }}</div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
