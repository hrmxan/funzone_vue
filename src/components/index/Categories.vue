<template>
  <section class="categories">
    <div class="container">
      <h1 data-aos="fade-right" class="section__title">
        Categories
      </h1>
      <div class="row cat__row">
        <div 
        :key="cat"
        v-for="cat in getCategoryDate.data"
         data-aos="fade-up" class="cat__col col-6 col-md-4 col-lg-3 col-xl-2 aos-init aos-animate">
          <a href="#" class="cat__card h-100">
            <img :src="cat.icon" alt="card">
            <strong>{{cat.name}}</strong>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }
    },
    computed: {
      ...mapGetters({
        getCategoryDate: 'getCategoryDate'
      })
    },
    methods: {
      ...mapActions({
        getCategory: 'getCategory'
      }),
      async updateCategory() {
        await this.getCategory();
      }
    },
    created() {
      this.updateCategory();
    },
  }
</script>

<style>

</style>