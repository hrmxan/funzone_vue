<template>
  <h3 class="regist__past__title per__title">Exit</h3>
    <h1 class="log__out_ask">
      Are you sure to loging out from this platform ?
    </h1>
    <div class="buttons d-flex justify-content-start">
      <router-link @click="LogOut" class="button-free" to="/">Yes</router-link>
      <a class="button-full" href="personal.html">No</a>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations({
        logOut: 'logOut'
      }),
      LogOut() {
        this.logOut();
        this.$router.push('/');
      }
    }
  }
</script>

<style>

</style>