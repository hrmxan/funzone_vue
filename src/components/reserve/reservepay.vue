<template>
  <section class="kip_up regist reservation">
    <div class="container">
      <h1 data-aos="fade-up" class="kipup__titlel login__title">
        Reservation
      </h1>
      <form class="login__form">
        <h3 class="reservation__pay">Payment methods</h3>
        <div class="pay__cards">
          <a href="#" class="pay__card__type">
            <img src="@/assets/img/payme_031.png" alt="pay">
          </a>
          <a href="#" class="pay__card__type">
            <img src="@/assets/img/click.png" alt="pay">
          </a>
          <a href="#" class="pay__card__type">
            <img src="@/assets/img/octo.png" alt="pay">
          </a>
          <a href="#" class="pay__card__type">
            <img src="@/assets/img/marta.png" alt="pay">
          </a>
          <div class="pay__card">
            <p class="you_have">
              <img src="@/assets/img/svg/wallet.svg" alt="wal">
              You have to pay
            </p>
            <strong>50 000 uzs</strong>
          </div>
        </div>
        <div data-aos="fade-up" class="login__regist">
          <router-link class="button-free" to="/reserve/time">Back</router-link>
          <a class="button-full" href="/insport/">Continue</a>
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