<template>
  <section class="kip_up regist">
    <div class="container">
      <div class="row kipup__row align-items-center">
        <div class="col-12 col-md-8 col-lg-6">
          <h1 class="kipup__titlel login__title">
            Registering
          </h1>
          <form class="login__form">
            <div class="row form__row">
              <div class="col12">
                <h3 class="regist__past__title">Personal Information</h3>
              </div>
              <div class="col-12 col-sm-6">
                <label for="first_name">First name</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="first_name" type="text" id="first_name" placeholder="First and Second name">
                </div>
                <alert
                :error="getLoginError.first_name"
                />
              </div>
              <div class="col-12 col-sm-6">
                <label for="detainput">Date of birth</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/deta.svg" alt="user_icon">
                  <input v-model="birthdayon"
                  min="1900-01-01"
                  max="2022-12-31"
                   class="deta__input" type="date" id="detainput" placeholder="dd/mm/yyyy">
                </div>
                <alert
                :error="getLoginError.birthday"
                />
              </div>
              <div class="col-12 col-sm-6">
                <label for="last_name">Last name</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="last_name" type="text" id="last_name" placeholder="username">
                </div>
                <alert
                :error="getLoginError.last_name"
                />
              </div>
              <div class="col-12 col-sm-6 per__reg__inp__col">
                <div class="label__body label__tip__bus">
                  <label @click="jins = 1" class="radio__labels first" for="man">
                    <input id="man" name="jins" type="radio">
                    <span :class="{'checked': jins == 1}" class="mask"></span>
                    <img src="@/assets/img/svg/man.svg" alt="man_ic">
                    Man
                  </label>
                  <label @click="jins = 2" class="radio__labels" for="woman">
                    <input id="woman" name="jins" type="radio">
                    <span :class="{'checked': jins == 2}" class="mask"></span>
                    <img src="@/assets/img/svg/woman.svg" alt="man_ic">
                    Woman
                  </label>
                </div>
                <alert
                :error="getLoginError.gender"
                />
              </div>
              <div class="col-12 col-sm-6">
                <label for="email_user">Email</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="email" type="text" id="email_user" placeholder="username">
                </div>
                <alert
                :error="getLoginError.email"
                />
              </div>
              <div class="col-12 col-sm-6">
                <label for="detainput">Telephone number</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/tel_ic.svg" alt="user_icon">
                  <imask-input :mask="'+998 (00) 000 00 00'" v-model="phone" radix="." :unmask="false" :lazy="false"
                    :placeholderChar="'-'" class="phone__input" type="text" id="phone"
                    placeholder="+ 998 (--) --- -- --" />
                </div>
                <alert
                :error="getLoginError.phone"
                />
              </div>
              
              <div class="col-12 col-sm-6">
                <label for="create_password">Create a password</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
                  <input v-model="password1" :type="unsee" id="create_password" placeholder="password">
                  <img v-if="unsee == 'password'" @click="unsee = 'text'" class="seen seen__pasword"
                    src="@/assets/img/svg/unseen.svg" alt="seen">
                  <img v-if="unsee == 'text'" @click="unsee = 'password'" class="seen seen__pasword"
                    src="@/assets/img/svg/seen_see.svg" alt="seen">
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <label for="password">Confirm a password</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
                  <input v-model="password2" :type="unsee2" id="password" placeholder="password">
                  <img v-if="unsee2 == 'password'" @click="unsee2 = 'text'" class="seen seen__pasword"
                    src="@/assets/img/svg/unseen.svg" alt="seen">
                  <img v-if="unsee2 == 'text'" @click="unsee2 = 'password'" class="seen seen__pasword"
                    src="@/assets/img/svg/seen_see.svg" alt="seen">
                </div>
                <alert
                :warning="password_notmuch"
                />
              </div>
              <div class="col-">
                <alert
                :error="getLoginError.password"
                />
              </div>
            </div>
            <div class="login__regist">
              <router-link @click="BusinesReg" class="button-full" to="/business/">Create account</router-link>
              <router-link class="button-free" to="/login/business">Log In</router-link>
            </div>
          </form>
        </div>
        <div class="col-6 kipup__right d-none d-lg-flex">
          <div data-aos="fade-left" class="kipup__img_fon">
            <img src="@/assets/img/login_left_bg.png" alt="kipup">
            <div class="filter__bg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    IMaskComponent
  } from 'vue-imask';
  import alert from '@/components/alerts';
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    components: {
      'imask-input': IMaskComponent,
      alert
    },
    computed: {
      ...mapGetters({
        getLoginDate: 'getLoginDate',
        getLoginError: 'getLoginError',
      })
    },
    data() {
      return {
        jins: 1,
        unsee: 'password',
        unsee2: 'password',
        phone: '',
        password: '',
        password1: '',
        password2: '',
        first_name: '',
        last_name: '',
        email: '',
        password_notmuch: '',
        birthdayon: '1990-01-01',
        birthday: '',
      }
    },
    watch: {
      password2(val) {
        if (val == this.password1) {
          this.password = val;
          this.password_notmuch = '';
        } else {
          this.password = '';
          this.password_notmuch = 'Passwords do not match';
        }
      },
      birthdayon (val) {
        this.birthday = new Date(val).getTime()/1000;
      }
    },
    methods: {
      ...mapActions([
        'businessRegister',
      ]),
      async BusinesReg (){
        let user = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          gender: this.jins,
          birthday: this.birthday
        };
        await this.businessRegister(user);
        console.log(user);
        console.log('getLoginDate',this.getLoginDate);
        console.log('getLoginError',this.getLoginError);
        if (this.getLoginDate.status == '200') {
          this.$router.push('/login/business-confirm');
        }
      }
    },
  }
</script>

<style>
</style>