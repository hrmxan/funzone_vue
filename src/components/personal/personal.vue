<template>
  <div class="col-12 col-md-8 col-lg-6 per__nav_col">
    <span class="per__line"></span>
    <form class="login__form">
      <div class="row form__row">
        <div class="co-l12">
          <h3 class="regist__past__title">Personal Information</h3>
        </div>
        <div class="col-12">
          <alert
          v-if="getUserUpdate.status"
          :success="'the data was successfully updated'"
          />
        </div>
        <div class="col-12 col-sm-6">
          <label for="fulname_user">Full name</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
            <input v-model="first_name" type="text" id="fulname_user" placeholder="First and Second name">
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <label for="fullname">Last name</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
            <input v-model="last_name" type="text" id="fullname" placeholder="fal0nchi">
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="label__body d-flex flex-column align-items-start">
            <label @click="jins = 0" class="radio__labels first" for="man">
              <input id="man" name="jins" type="radio">
              <span :class="{'checked': jins == 0}" class="mask"></span>
              <img src="@/assets/img/svg/man.svg" alt="man_ic">
              Man
            </label>
            <label @click="jins = 1" class="radio__labels" for="woman">
              <input id="woman" name="jins" type="radio">
              <span :class="{'checked': jins == 1}" class="mask"></span>
              <img src="@/assets/img/svg/woman.svg" alt="man_ic">
              Woman
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <label for="detainput">Date of birth</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/deta.svg" alt="user_icon">
            <input v-model="userdate"
            class="deta__input" type="date" id="detainput" placeholder="dd/mm/yyyy">
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <label for="phone">Telephone number</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/tel_ic.svg" alt="user_icon">


            <imask-input :mask="'+998 (00) 000 00 00'" v-model="phone" radix="." :unmask="false" :lazy="false"
              :placeholderChar="'-'" @accept="onAccept" class="phone__input" type="text" id="phone"
              placeholder="+ 998 (--) --- -- --" />


          </div>
        </div>

        <div class="login__regist mb-5">
        <router-link class="button-full" @click="infoUpdate" to="/personal/">Save</router-link>
      </div>
        
        <div class="col-12">
          <h3 class="regist__past__title">Password change</h3>
        </div>
        
        <div class="col-12">
          <alert
          :error="Error.old_password"
          />
          <alert
          v-if="getChangePassword.status"
          :success="'The password has been successfully updated'"
          />
        </div>
        
        <div class="col-12">
          <label for="password_user">Old password</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
            <input v-model="password1.value"  :type="password1.type" id="password_user" placeholder="password">
            <img v-if="password1.status" @click="password1.status = false, password1.type = 'text'"
              class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
            <img class="seen seen__pasword" @click="password1.status = true, password1.type = 'password'"
              v-if="!password1.status" src="@/assets/img/svg/seen_see.svg">
          </div>
        </div>
        <div class="col-12">
          <alert
          :error="Error.new_password"
          />
        </div>
        <div class="col-12">
          <alert
          :error="Error.password_confirm"
          />
        </div>
        <div class="col-12 col-sm-6">
          <label for="password">New password</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
            <input v-model="password2.value" :type="password2.type" id="password" placeholder="password">
            <img v-if="password2.status" @click="password2.status = false, password2.type = 'text'"
              class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
            <img class="seen seen__pasword" @click="password2.status = true, password2.type = 'password'"
              v-if="!password2.status" src="@/assets/img/svg/seen_see.svg">
          </div>
        </div>
         <div class="col-12 col-sm-6">
          <label for="password3">Confirm password</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/lock.svg" alt="user_icon">
            <input v-model="password3.value" :type="password3.type" id="password3" placeholder="password">
            <img v-if="password3.status" @click="password3.status = false, password3.type = 'text'"
              class="seen seen__pasword" src="@/assets/img/svg/unseen.svg">
            <img class="seen seen__pasword" @click="password3.status = true, password3.type = 'password'"
              v-if="!password3.status" src="@/assets/img/svg/seen_see.svg">
          </div>
        </div>
      </div>
      <div class="login__regist">
        <router-link @click="changePasswords" class="button-full" to="/personal/">Save</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import {
    IMaskComponent
  } from 'vue-imask';
  import {
    mapActions, mapGetters
  } from 'vuex';
  import alert from '@/components/alerts';
  export default {
    components: {
      'imask-input': IMaskComponent,
      alert
    },
    created() {
      this.getUserInfoData();
      // console.log("SET USER",this.setUser)
    },
    methods: {
      ...mapActions({
        getUserInfo: 'getUserInfo',
        changeInfo: 'changeInfo',
        changePassword: 'changePassword'
      }),
      async getUserInfoData() {
        await this.getUserInfo();
        localStorage.setItem('user_email', this.setUser?.email);
      (this.setUser.gender == "Female") ? this.jins = 1 : this.jins = 0;
      this.first_name = this.setUser.first_name;
      this.last_name = this.setUser.last_name;
      this.phone = this.setUser.phone;
      let birthday = new Date(this.setUser.birthday);
      this.userdate = '' + birthday.getFullYear() + '-' + (birthday.getMonth() + 1) + '-' + birthday.getDate();
      },
      async  infoUpdate (){
        
      let  userUpdate = {
          first_name: this.first_name,
          last_name: this.last_name,
          gender: this.jins,
          phone: this.phone,
          birthday: this.ubdatedata
        };
        await this.changeInfo (userUpdate);
        await this.getUserInfo();
        // console.log("JONADI",userUpdate);
        // console.log("yangi UPdate", this.setUser);
      },
      async changePasswords (){
        let passwors = {
          old_password: this.password1.value,
          new_password: this.password2.value,
          password_confirm: this.password3.value
        };
        await this.changePassword (passwors);
        // console.log('getChangePassword', this.getChangePassword);
        // console.log('ERROR', this.Error);
      }
    },
    watch: {
      userdate(val) {
        console.log(this.userdate);
        let data = new Date(val).getTime()/1000;
        // console.log("data", data);
        this.ubdatedata = data;
      }
    },
    computed: {
      ...mapGetters({
        setUser: 'setUser',
        getChangePassword: 'getChangePassword',
        Error: 'getError',
        getUserUpdate: 'getUserUpdate'
      })
    },
    data() {
      return {
        first_name: '',
        last_name: '',
        jins: 1,
        phone: '',
        userdate: '',
        ubdatedata: 0,
        // onAccept (value) {
        //   console.log(value);
        // },
        password1: {
          status: true,
          type: 'password',
          value: ''
        },
        password2: {
          status: true,
          type: 'password',
          value: ''
        },
        password3: {
          status: true,
          type: 'password',
          value: ''
        }
      }
    },

  }
</script>

<style>
  input {
    background: none !important;
  }
</style>