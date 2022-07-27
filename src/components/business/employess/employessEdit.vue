<template>
  <h3 class="regist__past__title">Edit employee </h3>
  <form class="login__form">
    <div class="row form__row bus__zone_sport">
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="fullname">Full name</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
          <input type="text" id="fullname" placeholder="Main and Second name">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="my__select">
          <label for="detainput">Role</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
            <span class="select__value">Menedger</span>
            <img class="first" src="@/assets/img/svg/vniz.svg" alt="user_icon">
          </div>
          <div class="select__options">
            <label for="sportZone">
              <input type="range">
              <span>Menedger1</span>
            </label>
            <label for="sportZone">
              <input type="range">
              <span>Menedger2</span>
            </label>
            <label for="sportZone">
              <input type="range">
              <span>Menedger3</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row form__row">
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="detainput">Telephone number</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/tel_ic.svg" alt="user_icon">
          <input class="phone__input" type="text" id="detainput" placeholder="+ 998 (--) --- -- --">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="Email">E-mail</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/email.svg" alt="user_icon">
          <input type="text" id="Email" placeholder="Email">
        </div>
      </div>

    </div>
    <div class="login__regist">
      <router-link class="button-free" to="./">Demission</router-link>
      <router-link class="button-full" to="/business/employess/monitoring">Save</router-link>
    </div>
  </form>
</template>

<script>
  export default {

  }
</script>

<style>

</style>