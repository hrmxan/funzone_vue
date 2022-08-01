<template>
  <section class="kip_up">
    <div class="container">
      <div class="row kipup__row align-items-center">
        <div class="col-12 col-md-8 col-lg-6">
          <h1 class="kipup__titlel login__title">
            Log In
          </h1>
          <form class="login__form">
            <div class="col-sm-12">
              <!-- <div v-if="getError.status || getError.message"
                class="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                role="alert" data-brk-library="component__alert">
                <i class="start-icon far fa-times-circle faa-pulse animated"></i>
                <strong class="font__weight-semibold">{{getError.status}}!</strong>
                <p :key="error" v-for="error in getError.message">{{error}}</p>
              </div> -->
              <alert :key="e" v-for="e in getError"
              :error = e
              ></alert>
            </div>
            <div class="row form__row">
              <div class="col-12 col-sm-6">
                <label for="username">Username</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg">
                  <input
                  v-model="user.email" type="text" id="username" placeholder="playername">
                </div>
              </div>
              <div class="col-12 col-sm-6 h-100">
                <label for="password">Password</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/lock.svg">
                  <input
                  v-model="user.password"
                  type="password" id="password" placeholder="password">
                  <img class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
                </div>
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
              <router-link @click="logIn" class="button-full" to="/personal/">Sign In</router-link>
              <router-link class="button-free" to="register/">Register</router-link>
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
    watch: {
      seen(val) {
        // email check
        if (val.length > 0) {
          this.seen = val;
        }
      },
      'user.email'(val) {
        console.log(val);
      }
    },
    computed: {
      ...mapGetters({
        getError: 'getError'
      })
    },
    data() {
      return {
        seen: '',
        user: {
          email: '',
          password: ''
        },
        error: {
          status: '',
          message: ''
        }
      }
    },
    methods: {
      ...mapActions(['updateToken']),
      async logIn() {
        this.error = {
          status: '',
          message: ''
        }
        await this.updateToken(this.user);
        this.error = this.getError;
        this.$router.push({name: 'Personal Index'});
      },
      eventKeycode(event) {
        if (event.keyCode === 13) {
          // console.log(event.keyCode);
          event.keyCode = 9;
          return event.keyCode;
        }
      },
    }
  }
</script>

<style>
  body {
    background: #000e29;
  }
</style>