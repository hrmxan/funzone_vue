<template>
  <section class="kip_up regist">
      <div class="container">
        <div class="row kipup__row align-items-center">
          <div class="col-12 col-md-8 col-lg-6">
            <h1 class="kipup__titlel login__title">
                Confirm your number
            </h1>
            <form class="login__form">
              <div class="row form__row">
                <div class="col-12">
                  <h3 class="regist__past__title">We have send a confirmation code to your telephone number
                    please it.</h3>
                </div>
                <div  class="col-12">
                  <alert
                  :error="getLoginError?.message"
                  />
                </div>
                
               
                <div class="col-12 col-sm-6">
                  <label for="password">Confirmation code</label>
                  <div class="input_body">
                    <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
                    <input v-model="user.code" type="text" id="password" placeholder="1234">
                  </div>
                </div>
              </div>
              <div class="login__regist">
                <router-link class="button-free" to="/login/business-register/">Back</router-link>
                <router-link @click="configEmail" class="button-full" to="/login/business-confirm">Start Scheduling</router-link>
                
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
import { mapActions, mapGetters} from 'vuex';
import alert from '@/components/alerts.vue';

export default {
  components: {
    alert
  },
  data() {
    return {
      user: {
        email: '',
        code: ''
      }
    }
  },
  created() {
    this.user.email = this.getLoginDate.email;
  },
  computed: {
    ...mapGetters({
      getLoginError: 'getLoginError',
      getLoginDate: 'getLoginDate',
    })
  },
  methods: {
    ...mapActions(['emailConfig']),
    async configEmail() {
      console.log("USER",this.user);
      await this.emailConfig(this.user);
      console.log("GET DATA",this.getLoginDate);
      console.log("GET ERROR",this.getLoginError);
      if (this.getLoginDate.token) {
        localStorage.setItem('token', this.getLoginDate.token);
        this.$router.push('/business/');
      }
    }
  }

}
</script>

<style>

</style>