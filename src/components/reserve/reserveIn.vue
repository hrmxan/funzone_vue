<template>
  <section class="kip_up regist reservation">
    <div class="container">
      <h1 data-aos="fade-up" class="kipup__titlel login__title">
        Reservation
      </h1>
      <form class="login__form">
        <div class="row form__row">

          <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-3">
            <label for="detainput">Date</label>
            <div class="input_body">
              <img class="first" src="@/assets/img/svg/deta.svg" alt="user_icon">
              <input class="deta__input" type="date" id="detainput" placeholder="dd/mm/yyyy">
            </div>
          </div>

          <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-3">
            <label for="fullname">Select time</label>
            <div class="input_body">
              <img class="first" src="@/assets/img/svg/clock_d.svg" alt="user_icon">
              <input type="time" id="fullname">
            </div>
          </div>

        </div>
        <div data-aos="fade-up" class="login__regist">
          <router-link class="button-free" to="/insport">Back</router-link>
          <router-link class="button-full" to="/reserve/time">Continue</router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style>

</style>