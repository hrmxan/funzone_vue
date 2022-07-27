<template>
  <div data-aos="fade-up" class="cat__col col-6 col-md-4 col-lg-3 col-xl-2">
    <a :href="link" class="cat__card h-100">
      <img :src="require(`@/assets/img/${img}`)">
      <strong>{{title}}</strong>
      <span></span>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      },
      img: {
        type: String,
      },
      link: {
        type: String,
      },
    }

  }
</script>

<style>

</style>