<template>
  <loader v-if="isLoading" />
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import loader from '../components/minicomps/loader.vue';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      Navbar,
      Footer,
      loader,
    },
    data() {
      return {
        loader: false,
      }
    },
    computed: {
      ...mapGetters({
        isLoading: 'isLoading',
      }),
    }
  }
</script>

<style>

</style>