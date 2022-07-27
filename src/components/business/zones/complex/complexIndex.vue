<template>
  <h3 class="regist__past__title">My zones <router-link to="create" class="mute_buttons">
      <img src="@/assets/img/svg/add.svg" alt="add">
    </router-link></h3>
  <div class="row cat__row">
    <a href="create_zone_form.html" data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <div class="cat__card my__zone_card h-100 my_zone_plus">
        <img src="@/assets/img/my_zone_card1.png" alt="card">
        <div class="title">
          <strong>Humo sport</strong>
          <p>Tennis, Swimming pool, Basketball arena</p>
        </div>
      </div>
    </a>
    <a href="create_zone_form.html" data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <div class="cat__card my__zone_card h-100 my_zone_plus">
        <img src="@/assets/img/my_zone_card2.png" alt="card">
        <div class="title">
          <strong>Humo sport</strong>
          <p>Tennis, Swimming pool, Basketball arena</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>