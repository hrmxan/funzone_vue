<template>
  <div data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <router-link :to="route" class="cat__card my__zone_card h-100 my_zone_plus employes">
        <h4>{{name}}</h4>
        <p>{{email}}</p>
        <strong>{{sport_complex}}</strong>
      </router-link>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        sport_complex: {
            type: String,
        },
        route: {
            type: String,
        }
    },

}
</script>

<style>

</style>