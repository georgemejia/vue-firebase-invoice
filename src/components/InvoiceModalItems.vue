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
      <ModalItem :item="item" />
    </div>
  
    <button class="w-full bg-slate-700 py-2 rounded mb-5 text-white font-bold" @click="addNewItem">+ Add New Item</button>
  </div>
</template>

<script>
import ModalItem from './ModalItem.vue'
export default {
  props: ['items'],
  components: { ModalItem },
  setup(props) {

    function addNewItem() {
      props.items.push({
        name: '',
        quantity: null,
        price: null,
        total: null
      })
    }

    return { addNewItem }
  }
}
</script>

<style>

</style>