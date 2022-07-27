<template>
<loader v-if="isLoading" />
  <KipUp/>
  <Categories/>
  <TopCard/>
  <CenterAbout/>
  <TipsNav/>
</template>

<script>
  import KipUp from '../components/index/KipUp.vue';
  import Categories from '../components/index/Categories.vue';
  import TopCard from '../components/index/TopCards.vue';
  import CenterAbout from '../components/index/CenterAbout.vue';
  import TipsNav from '../components/index/TipsNav.vue';
  import { mapGetters } from 'vuex';
  import loader from '../components/minicomps/loader.vue';
  export default {
    components: { KipUp, Categories, TopCard, CenterAbout, TipsNav, loader },
    computed: {
      ...mapGetters({
        isLoading: 'isLoading',
      }),
    },
  }
</script>

<style>

</style>