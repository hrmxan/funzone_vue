<template>
  <h3 class="regist__past__title">Personal Information</h3>
  <div class="row cat__row">
    <div data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <div class="cat__card my__zone_card h-100">
        <img src="@/assets/img/my_zone_card1.png" alt="card">
        <router-link class="button-free" to="sport/">Sport zones</router-link>
      </div>
    </div>
    <div data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <div class="cat__card my__zone_card h-100">
        <img src="@/assets/img/my_zone_card2.png" alt="card">
        <router-link class="button-free" to="complex/">Create a sport complex</router-link>
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