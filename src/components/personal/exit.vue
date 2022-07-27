<template>
  <div class="col-12 h-100 col-md-8 col-lg-9 per__nav_col">
    <span class="per__line"></span>
    <h3 class="regist__past__title per__title">Exit</h3>
    <h1 class="log__out_ask">
      Are you sure to loging out from this platform ?
    </h1>
    <div class="buttons d-flex justify-content-start">
      <router-link @click="logout" class="button-free" to="/">Yes</router-link>
      <router-link class="button-full" to="/personal/">No</router-link>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_email');
        this.$router.push('/');
      }
    }
  }
</script>

<style>

</style>