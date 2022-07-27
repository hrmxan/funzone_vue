<template>
  <h3 class="regist__past__title">Add responsible person to your zone</h3>
  <form class="login__form">
    <div class="row form__row bus__zone_sport">
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="password">Email</label>
        <div class="input_body before__title_input">
          <img class="first" src="@/assets/img/svg/email.svg" alt="user_icon">
          <input type="password" id="password" placeholder="password">

        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 login__regist">
        <a class="button-full" href="busines__sport_zone_time.html">Send</a>
      </div>
    </div>
    <div class="login__regist mt-5">
      <router-link class="button-free" to="time">Back</router-link>
      <router-link class="button-full" to="./">Skip</router-link>
    </div>
  </form>
</template>

<script>
  export default {

  }
</script>

<style>

</style>