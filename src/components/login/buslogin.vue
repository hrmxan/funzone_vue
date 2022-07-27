<template>
  <section class="kip_up">
    <div class="container">
      <div class="row kipup__row align-items-center">
        <div class="col-12 col-md-8 col-lg-6">
          <h1 class="kipup__titlel login__title">
            Log In
          </h1>
          <form class="login__form">
            <div class="row form__row">
              <div class="col-12 col-sm-6">
                <label for="user_email">Username</label>
                
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="email" type="text" id="user_email" placeholder="playername">
                </div>
                <alert
                :error="getLoginError.email"
                />
              </div>
              <div class="col-12 col-sm-6">
                <label for="password">Password</label>
                
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
                  <input v-model="password" :type="unsee" id="password" placeholder="password">
                  <img v-if="unsee == 'password'" @click="unsee = 'text'" class="seen seen__pasword" src="@/assets/img/svg/unseen.svg" alt="seen">
                  <img v-if="unsee == 'text'" @click="unsee = 'password'" class="seen seen__pasword" src="@/assets/img/svg/seen_see.svg" alt="seen">
                </div>
                <alert
                :error="getLoginError.password"
                />
              </div>
              <div class="col-12 d-flex justify-content-end">
                <a class="forget" href="#">
                  Reset password ?
                </a>
              </div>
              
            </div>
            <div class="orline overflow-hidden">
              <span data-aos="fade-right"></span>
              <p>or</p>
              <span data-aos="fade-left"></span>
            </div>
            <div class="row login__links">
              <div class="col-12 col-sm-6">
                <a href="#">
                  <img src="@/assets/img/svg/google.svg" alt="google_ic">
                  Sign in with Google
                </a>
              </div>
              <div class="col-12 col-sm-6">
                <a class="last" href="#">
                  <img src="@/assets/img/svg/apple.svg" alt="google_ic">
                  Sign in with Apple ID
                </a>
              </div>
            </div>
            <div class="login__regist">
              <router-link @click="LogIn" class="button-full" to="/business/">Sign In</router-link>
              <router-link class="button-free" to="/login/business-register/">Register</router-link>
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
import { mapActions, mapGetters } from 'vuex'
import alert from '@/components/alerts'
  export default {
    components: {
      alert
    },
    data() {
      return {
        email: '',
        password: '',
        unsee: 'password'
      }
    },
    computed: {
      ...mapGetters({
        getLoginDate: 'getLoginDate',
        getLoginError: 'getLoginError'
      })
    },
    methods: {
      ...mapActions(['logIn']),
      async LogIn() {
        let user = {
          email: this.email,
          password: this.password
        };
        await this.logIn(user);
        this.$router.push('/business/');
        console.log('loginError', this.getLoginError);
      }
    },
  }
</script>

<style>

</style>