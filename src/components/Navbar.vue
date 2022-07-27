<template>
   <section :class="{colapsed:navtogle}" id="colapsBar" class="colapse-menu navbar_colapse_bar">
      <div class=" container">
        <ul class="navbar_list_bar">
          <li class="navbar_item"><a href="order__arena.html">Order arena</a></li>
          <li class="navbar_item"><a href="#">Features</a></li>
          <li class="navbar_item"><a href="#">About us</a></li>
        </ul>
        <a id="closeNav" @click="closeNav" class="closenav d-flex d-lg-none" href="#">
          <img src="@/assets/img/svg/close-circle.svg" alt="close">
        </a>
      </div>
    </section>

    <div class="container">
      <nav data-aos="fade-down">
        <a id="burgerButton" @click="navbarToggle" class="d-flex d-lg-none burger_btn mute_buttons" href="#">
          <img src="@/assets/img/svg/burger_button.svg" alt="burger">
        </a>
        <router-link to="/" class="logo">
          <img class="logo_brand" src="@/assets/img/svg/logo_brand.svg" alt="logo">
          <img class="logo_name d-none d-xl-flex" src="@/assets/img/svg/logo_name.svg" alt="logo">
        </router-link>
        <div class="navbar_colapse d-none d-lg-flex">
          <ul class="navbar_list">
            <li class="navbar_item"><router-link to="/arena">Order arena</router-link></li>
            <li class="navbar_item"><a href="#">Features</a></li>
            <li class="navbar_item"><a href="#">About us</a></li>
          </ul>
          <a id="closeNav" class="closenav d-flex d-lg-none" href="#">
            <img src="@/assets/img/svg/close-circle.svg" alt="close">
          </a>
        </div>
        <div class="reg__log">
          <router-link class="business d-none d-lg-flex" to="/login/business/">Apply As Business</router-link>
          <router-link class="login d-none d-lg-flex" to="/login/">
            <span v-if="!nicName" >Log In</span>
            <span v-if="nicName" >{{nicName}}</span>
          </router-link>
          <router-link class="d-flex d-lg-none login_icon" to="/login/">
            <img src="@/assets/img/svg/log_user.svg" alt="user">
            <span v-if="nicName" >hrmxan</span>
          </router-link>
        </div>
      </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'setUser'
    }),
  },
  created() {
    let email = localStorage.getItem('user_email') || '';
    this.nicName = email.split('@')[0];
  },
  data() {
    return {
      navtogle: false,
      nicName: ''
    }
  },
  // maunted metods vue 3
  mounted() {
  },
  methods: {
    // methods vue 3
    navbarToggle() {
      this.navtogle = true;
      document.body.style.overflow = 'hidden';
    },
    closeNav() {
      this.navtogle = false;
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<style>
.login_icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_icon img {
  margin-right: 15px;
}

</style>