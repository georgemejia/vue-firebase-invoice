<template>
  <div>
    <h2 class="text-white text-2xl mb-2">Items</h2>
    <!-- table header -->
    <div class="grid grid-cols-5 gap-x-4 mb-5">
      <div class="text-white col-span-2 text-sm">Item Name</div>
      <div class="text-white text-sm">Quantity</div>
      <div class="text-white text-sm">Price</div>
      <div class="text-white text-sm">Total</div>
    </div>
    <!-- table rows that will be added on -->
    <div class="grid grid-cols-5 gap-x-4 mb-5" v-for="(item, index) in items" :key="index">
      <div class="col-span-2">
        <input class="block w-full bg-slate-700 rounded" type="text">
      </div>
      <div>
        <input class="block w-full bg-slate-700 rounded" type="text">
      </div>
      <div>
        <input class="block w-full bg-slate-700 rounded" type="text">
      </div>
      <div class="text-white">{{ item.total }}</div>
    </div>
  
    <button class="w-full bg-slate-700 py-2 rounded mb-5 text-white font-bold" @click="addNewItem">+ Add New Item</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([])

    function addNewItem() {
      items.value.push({
        name: '',
        quantity: null,
        price: null,
        total: null
      })

      console.log(items)
    }

    return { items, addNewItem }
  }
}
</script>

<style>

</style>