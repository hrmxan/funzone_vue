<template>
<loader v-if="isLoading" />
<header>
    <Navbar />
</header>
  <main>
    <section class="kip_up regist">
    <div class="container">
      <div class="row kipup__row personal__row">
        <businessNavbar></businessNavbar>
        <div class="col-12 col-md-8 col-lg-9 per__nav_col">
          <span class="per__line"></span>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import businessNavbar from '../components/minicomps/businessNavbar.vue';
import loader from '../components/minicomps/loader.vue';
import { mapGetters } from 'vuex';
  export default {
    components: {
      Navbar,
      businessNavbar,
      loader,
    },
    computed: {
      ...mapGetters({
        isLoading: 'isLoading',
      }),
    },
  }
</script>

<style>

</style>