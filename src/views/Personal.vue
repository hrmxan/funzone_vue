<template>
<loader v-if="isLoading || authIsLoading" />
<header>
    <Navbar />
</header>
  <main>
    <section class="kip_up regist">
      <div class="container">
        <div class="row kipup__row personal__row">
          
          <personalNav></personalNav>
          <router-view></router-view>
        </div>
      </div>
  </section>
  </main>
</template>

<script>
  import personalNav from '@/components/personal/personalNav.vue';
  import Navbar from '@/components/Navbar.vue';
  import loader from '@/components/minicomps/loader.vue';
  import { mapGetters } from 'vuex';
export default {
  components: {
    personalNav,
    Navbar,
    loader,
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      authIsLoading: 'authIsLoading',
    }),
  },

}
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
  background: transparent !important;
}

</style>