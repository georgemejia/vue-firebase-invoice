<template>
   <div class="flex justify-between mb-20">
      <div>
         <h2 class="text-indigo-600 font-bold mb-2 text-lg">From:</h2>
         <p class="text-white font-bold">Name:</p>
         <p class="text-white text-sm mb-5">{{ invoice.fromName }}</p>
         <p class="text-white font-bold">Email:</p>
         <p class="text-white text-sm">{{ invoice.fromEmail }}</p>
      </div>
      <div>
         <h2 class="text-indigo-600 font-bold mb-2 text-lg">To:</h2>
         <div class="flex justify-between">
            <div class="mr-10">
               <p class="text-white font-bold">Name:</p>
               <p class="text-white text-sm mb-5">{{ invoice.toName }}</p>
               <p class="text-white font-bold">Email:</p>
               <p class="text-white text-sm">{{ invoice.toEmail }}</p>
            </div>
            <div>
               <p class="text-white font-bold">Address:</p>
               <p class="text-white text-sm">{{ invoice.toAddress }}</p>
               <p class="text-white text-sm">{{ invoice.toCity }}</p>
               <p class="text-white text-sm">{{ invoice.toZipcode }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ['invoice']
}
</script>