<template>
  <h3 class="regist__past__title">Creating a sport zone</h3>
  <form class="login__form">
    <label for="fileinput" class="file__input">
      <input id="fileinput" type="file">
      <span class=" file_upload">
        <img src="@/assets/img/svg/Export.svg" alt="export">
        Upload pictures
      </span>
      <div class="input_body">
        <span>this is your file</span>
      </div>
    </label>
    <div class="row form__row bus__zone_sport">
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="my__select">
          <label for="detainput">Zone type</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/sportzone.svg" alt="user_icon">
            <span class="select__value">Football stadium</span>
            <img class="first" src="@/assets/img/svg/vniz.svg" alt="user_icon">
          </div>
          <div class="select__options">
            <label for="sportZone">
              <input type="range">
              Football stadium1
            </label>
            <label for="sportZone">
              <input type="range">
              Football stadium1
            </label>
            <label for="sportZone">
              <input type="range">
              Football stadium1
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="fullname">Address</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/Location_d.svg" alt="user_icon">
          <input type="text" id="fullname" placeholder="Location">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 d-flex align-items-end">
        <a class="button-free bus_btn" href="#">Show on map</a>
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
        <label for="detainput">Telephone number</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/tel_ic.svg" alt="user_icon">
          <input class="phone__input" type="text" id="detainput" placeholder="+ 998 (--) --- -- --">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 d-flex align-items-end">
        <a class="button-free bus_btn" href="#">Add number</a>
      </div>
    </div>
    <div class="login__regist">
      <router-link class="button-free" to="./">Back</router-link>
      <router-link class="button-full" to="time">Next step</router-link>
    </div>
  </form>
</template>

<script>
  export default {

  }
</script>

<style>

</style>