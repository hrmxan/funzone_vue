<template>
  <form class="login__form">
    <div class="row form__row">
      <div class="col-12">
        <h3 class="regist__past__title">Personal Information</h3>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="first_name">First name</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
          <input v-model="first_name" type="text" id="first_name" placeholder="First and Second name">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="last_name">Last name</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
          <input v-model="last_name" type="text" id="last_name" placeholder="fal0nchi">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="data_birthday">Date of birth</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/deta.svg" alt="user_icon">
          <input v-model="birthdayon" min="1900-01-01" max="2022-12-31" class="deta__input" type="date"
            id="data_birthday" placeholder="dd/mm/yyyy">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="detainput">Telephone number</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/tel_ic.svg" alt="user_icon">
          <imask-input :mask="'+998 (00) 000 00 00'" v-model="phone" radix="." :unmask="false" :lazy="false"
            :placeholderChar="'-'" class="phone__input" type="text" id="detainput" placeholder="+ 998 (--) --- -- --" />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 per__reg__inp__col">
        <div class="label__body label__tip__bus">
          <label @click="jins='Male'" class="radio__labels first" for="man">
            <input id="man" name="jins" type="radio">
            <span :class="{'checked': jins == 'Male'}" class="mask"></span>
            <img src="@/assets/img/svg/man.svg" alt="man_ic">
            Man
          </label>
          <label @click="jins='Female'" class="radio__labels" for="woman">
            <input id="woman" name="jins" type="radio">
            <span :class="{'checked': jins == 'Female'}" class="mask"></span>
            <img src="@/assets/img/svg/woman.svg" alt="man_ic">
            Woman
          </label>
        </div>
      </div>

    </div>
    <div class="login__regist mb-5">
      <a @click="dataSave" class="button-full" href="#">Save</a>
    </div>
    <div class="row form__row">
      <div class="col-12">
        <alert
        v-if="getBusChangePass.status"
        :success="'The password has been successfully changed'"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="old_password">Old password</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
          <input v-model="password1.value" :type="password1.type" id="old_password" placeholder="password">
          <img v-if="password1.status" @click="password1.status = false, password1.type = 'text'"
            class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
          <img class="seen seen__pasword" @click="password1.status = true, password1.type = 'password'"
            v-if="!password1.status" src="@/assets/img/svg/seen_see.svg">
        </div>
        <alert
        :error="getLoginError.old_password"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="new_password">New password</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
          <input v-model="password2.value" :type="password2.type" id="new_password" placeholder="password">
          <img v-if="password2.status" @click="password2.status = false, password2.type = 'text'"
            class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
          <img class="seen seen__pasword" @click="password2.status = true, password2.type = 'password'"
            v-if="!password2.status" src="@/assets/img/svg/seen_see.svg">
        </div>
        <alert
        :error="getLoginError.new_password"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="password">Password confirm</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
          <input v-model="password3.value" :type="password3.type" id="password" placeholder="password">
          <img v-if="password3.status" @click="password3.status = false, password3.type = 'text'"
            class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
          <img class="seen seen__pasword" @click="password3.status = true, password3.type = 'password'"
            v-if="!password3.status" src="@/assets/img/svg/seen_see.svg">
        </div>
        <alert
        :error="getLoginError.password_confirm"
        />
      </div>
    </div>
    <div class="login__regist mb-5">
      <a @click="passwordchange" class="button-full" href="confirm__num.html">Save</a>
    </div>
  </form>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import {
    IMaskComponent
  } from 'vue-imask';
  import alert from '@/components/alerts';
  export default {
    components: {
      'imask-input': IMaskComponent,
      alert
    },
    created() {
      this.getmedata();
    },
    computed: {
      ...mapGetters({
        getLoginDate: 'getLoginDate',
        getLoginError: 'getLoginError',
        getBusChangePass: 'getBusChangePass',
      }),
    },
    data() {
      return {
        birthdayon: '2022-12-02',
        first_name: '',
        last_name: '',
        phone: '',
        jins: '',
        password1: {
          value: '',
          type: 'password',
          status: true,
        },
        password2: {
          value: '',
          type: 'password',
          status: true,
        },
        password3: {
          value: '',
          type: 'password',
          status: true,
        },
      }
    },
    methods: {
      ...mapActions(['getMebusiness', 'userBusinesChange','businessPassChange']),
      async getmedata() {
        await this.getMebusiness();
        let data = new Date(this.getLoginDate.birthday);
        let month = (data.getMonth() + 1 < 10) ? '0' + (data.getMonth() + 1) : data.getMonth() + 1;
        let day = (data.getDate() < 10) ? '0' + data.getDate() : data.getDate();
        data = `${data.getFullYear()}-${month}-${day}`;
        this.birthdayon = data;
        this.first_name = this.getLoginDate.first_name;
        this.last_name = this.getLoginDate.last_name;
        this.phone = this.getLoginDate.phone;
        this.jins = this.getLoginDate.gender;
        console.log(this.getLoginDate);
        if (this.getLoginDate.token) {
          localStorage.setItem('token', this.getLoginDate.token);
          localStorage.setItem('user_email', this.getLoginDate.email);
        }
        console.log('getLoginError', this.getLoginError);
      },
      async dataSave(e) {
        e.preventDefault();
        let user = {
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          birthday: new Date(this.birthdayon).getTime() / 1000,
          gender: (this.jins == 'Male') ? 1 : 0,
        }
        await this.userBusinesChange(user);
      },
      async passwordchange(e){
        e.preventDefault();
        let user = {
          old_password: this.password1.value,
          new_password: this.password2.value,
          password_confirm: this.password3.value,
        }
        await this.businessPassChange(user);
        console.log('getBusChangePass', this.getBusChangePass);
        console.log('getLoginError',this.getLoginError);
      }
    },

  }
</script>

<style>

</style>