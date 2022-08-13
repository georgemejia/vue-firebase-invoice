<template>
  <div>
    <form class="row flex flex-center mb-10" @submit.prevent="handleSignUp">
      <div class="mx-auto">
        <h1 class="text-white mb-2">Sign Up</h1>
        <div class="mb-2">
          <input class="" type="email" placeholder="Your email" v-model="signUp.email" />
        </div>
        <div class="mb-2">
          <input type="text" class="" placeholder="Enter Password" v-model="signUp.password" />
        </div>
        <input type="submit" value="submit" class="text-white bg-red-400 p-5"/>
      </div>
    </form>

    <form class="row flex flex-center" @submit.prevent="handleSignIn">
      <div class="mx-auto">
        <h1 class="text-white mb-2">Sign In</h1>
        <div class="mb-2">
          <input class="" type="email" placeholder="Your email" v-model="signIn.email" />
        </div>
        <div class="mb-2">
          <input type="text" class="" placeholder="Enter Password" v-model="signIn.password"/>
        </div>
        <input type="submit" value="submit" class="text-white bg-red-400 p-5"/>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from 'vuex'

export default {
   setup() {
      const store = useStore()
      const signUp = ref({})
      const signIn = ref({})

      const handleSignUp = () => {
        store.dispatch('signUp', signUp.value)
        signUp.value = {}
      }

      const handleSignIn = () => {
        store.dispatch('signIn', signIn.value)
        signIn.value = {}
      }

      return { signUp, signIn, handleSignUp, handleSignIn }
  }
}
</script>

<style>

</style>