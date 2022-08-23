<template>
   <div>
      <div class="bg-slate-700 mb-5 py-5 px-3 rounded">
         <div class="grid grid-cols-5">
         <h3 class="text-white font-bold col-span-2 ">Items Description</h3>
         <h3 class="text-white font-bold text-center">Quantity</h3>
         <h3 class="text-white font-bold text-center">Price</h3>
         <h3 class="text-white font-bold text-center">Total</h3>
         </div>
         <div class="grid grid-cols-5 mt-5" v-for="(item, index) in invoice.items" :key="index">
         <p class="text-white text-sm col-span-2">{{ item.name}}</p>
         <p class="text-white text-sm text-center">{{ item.quantity}}</p>
         <p class="text-white text-sm text-center">{{ item.price}}</p>
         <p class="text-white text-sm text-center">${{ item.total }}</p>
         </div>
      </div>
      
      <h2 class="text-end text-xl text-white font-bold mb-20">Total: ${{ total }}</h2>
   </div>
</template>

<script>
import { computed } from 'vue'
export default {
   props: ['invoice', 'index'],
   setup(props) {
      // renders the total amount for all the total items in an invoice (not part of the object)
      const total = computed(() => {
         const invoiceTotals = props.invoice.items.map((item) => item.total )

         let sum = 0
            for (let i = 0; i < invoiceTotals.length; i++) {
            sum+=invoiceTotals[i]
         }
         
         return sum
      })

      return { total }
   }
}
</script>