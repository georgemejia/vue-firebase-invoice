<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="bg-slate-800 flex justify-between items-center p-5 rounded mb-3">
      <div>
        <button class="text-white">
          Go back
        </button>
      </div>
      <div>
        <button class="text-white bg-red-500 py-2 px-3 rounded">Delete</button>
        <button class="text-white bg-indigo-600 py-2 px-3 ml-2 rounded">Mark as Paid</button>
        <button class="text-white bg-slate-700 py-2 px-3 ml-2 rounded">Edit</button>
      </div>
    </div>

    <div class="bg-slate-800 p-5">
      <div class="flex justify-between mb-10">
        <p class="text-indigo-600 font-bold">From:</p>
        <div class="text-right">
          <p class="text-white font-bold">Address</p>
          <p class="text-white">1234 mystreet</p>
          <p class="text-white">my city</p>
          <p class="text-white">123456</p>
        </div>
      </div>

      <div class="flex justify-between">
        <div>
          <p class="text-indigo-600 font-bold mb-2">To:</p>
          <p class="text-white font-bold">Name:</p>
          <p class="text-white mb-2">Jane Smith</p>
          <p class="text-white font-bold">Email:</p>
          <p class="text-white">janesmight@email.com</p>
        </div>
        
        <div class="text-right">
          <p class="text-white font-bold">Address</p>
          <p class="text-white">567 mystreet</p>
          <p class="text-white">my client city</p>
          <p class="text-white">78910</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>