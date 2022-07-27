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
              <div class="col-12">
                <h3 class="regist__past__title">Personal Information</h3>
              </div>
              <div class="col-12">
                <alert v-if="Error?.message" :error = Error?.message />
              </div>
              <div class="col-12 col-sm-6">
                <label for="user_fullname">Full name</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="user.first_name"  type="text" id="user_fullname" placeholder="First and Second name">
                </div>
                <alert v-if="Error?.first_name" :error = Error?.first_name />
              </div>
              <div class="col-12 col-sm-6">
                <label for="detainput">Date of birth</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/deta.svg" alt="user_icon">
                  <input v-model="date" class="deta__input" type="date" id="detainput" placeholder="dd/mm/yyyy">
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="label__body d-flex flex-column align-items-start">
                  <label class="radio__labels first" for="man">
                    <input @click="user.gender = 0" id="man" name="jins" type="radio">
                    <span :class="{'checked': user.gender==0}" class="mask"></span>
                    <img src="@/assets/img/svg/man.svg" alt="man_ic">
                    Man
                  </label>
                  <label class="radio__labels" for="woman">
                    <input @click="user.gender = 1" id="woman" name="jins" type="radio">
                    <span :class="{'checked': user.gender==1}" class="mask"></span>
                    <img src="@/assets/img/svg/woman.svg" alt="man_ic">
                    Woman
                  </label>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <label for="fullname">Email</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="user.email" type="text" id="fullname" placeholder="Your email">
                </div>
                <alert v-if="Error?.email" :error = Error?.email />
              </div>
              <div class="col12">
                <h3 class="regist__past__title">Account Information</h3>
              </div>
              <div class="col-12 col-sm-6">
                <label for="last_name">Last name</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
                  <input v-model="user.last_name"  type="text" id="last_name" placeholder="username">
                </div>
                <alert v-if="Error?.last_name" :error = Error?.last_name />
              </div>
              <div class="col-12 col-sm-6">
                <label for="detainput">Phone</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/phone.svg" alt="user_icon">

                  <imask-input :mask="'+998 (00) 000 00 00'" v-model="user.phone" radix="." :unmask="true" :lazy="false"
                    :placeholderChar="'-'" class="phone__input" type="text"
                    id="phone" placeholder="+ 998 (--) --- -- --" />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <label for="password1">Create a password</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
                  <input 
                  v-model="password1.value"
                  :type="password1.type" id="password1" placeholder="password">
                  <img v-if="password1.status" @click="password1.status = false, password1.type = 'text'"
                    class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
                  <img class="seen seen__pasword" @click="password1.status = true, password1.type = 'password'"
                    v-if="!password1.status" src="@/assets/img/svg/seen_see.svg">
                </div>
                <alert v-if="Error?.password" :error = Error?.password />
              </div>
              <div class="col-12 col-sm-6">
                
                <label for="password2">Confirm a password</label>
                <div class="input_body">
                  <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
                  <input 
                  v-model="password2.value"
                  :type="password2.type" id="password2" placeholder="password">
                  <img v-if="password2.status" @click="password2.status = false, password2.type = 'text'"
                    class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
                  <img class="seen seen__pasword" @click="password2.status = true, password2.type = 'password'"
                    v-if="!password2.status" src="@/assets/img/svg/seen_see.svg">
                </div>
                <alert
                  v-if="password2.config"
                  :warning="password2.config"
                 />
                 <alert v-if="Error?.password" :error = Error?.password />
              </div>
            </div>
            <div class="login__regist">
              <router-link @click="registrUser" class="button-full" to="/login/register/">Create account</router-link>
              <router-link class="button-free" to="/login/">Log In</router-link>
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
    <pre>{{Error}}</pre>
  </section>
</template>

<script>
  import {
    IMaskComponent
  } from 'vue-imask';
  import alert from '@/components/alerts.vue';
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
        Error: 'getError',
        regUser: 'getRegUser'
      })
    },
    watch: {
      'password2.value': function(val) {
        if (val == this.password1.value && val.length >= 6) {
          this.password2.config = '';
          this.user.password = val;
        } else {
          this.password2.config = "parollar mmos va 6 belgidan kam bo'lmasligi kerak";
          this.user.password = '';
        }
      },
      date (val) {
        this.user.date = new Date(val).getTime()/1000;
      }
    },
    methods: {
      ...mapActions([
        'userRegister'
      ]),
      async registrUser(){
        await this.userRegister(this.user);
        if (this.regUser.status) {
          localStorage.setItem('email', this.regUser.email);
          this.$router.push('/login/confirm');
        }
        // console.log(this.Error);
      }
    },
    data() {
      return {
        date: '',
        password2: {
          value: '',
          status: true,
          type: 'password',
          config: ''
        },
         password1: {
          value: '',
          status: true,
          type: 'password'
        },
        user: {
          first_name: '',
          last_name: '',
          date: '',
          gender: 0,
          email: '',
          phone: '',
          password: '',
        },
      }
    },

  }
</script>

<style>

</style>