<template>
  <div class="col-12 col-lg-6 col-xl-4 tops__col">
    <a data-aos="fade-up" :href="href" class="tops__card h-100">
      <div class="img__body">
        <img :src="require(`@/assets/img/${img}`)" alt="tops">
      </div>
      <strong class="name">
        {{map}}
      </strong>
      <div class="type-deagre">
        <span class="type button-free">
          {{type}}
        </span>
        <span class="deagre">
          <span :key="d" v-for="d in degre" 
          class="star_full"></span>
        </span>
        <span class="deagre">
          <span :key="d" v-for="d in (5-degre)" 
          class="star_free"></span>
        </span>
      </div>
      <strong class="summa">C {{summa}} сум</strong>
      <div class="status">
        <span class="time">{{time}}</span>
        <span v-if="status" class="active open">Open</span>
        <span v-else-if="!status" class="active closed">Closed</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
      },
      img : {
        type: String,
      },
      map: {
        type: String,
      },
      type: {
        type: String,
      },
      degre: {
        type: Number,
      },
      summa: {
        type: String,
      },
      time: {
        type: String,
      },
      status: {
        type: Boolean,
      }
    }

  }
</script>

<style>

</style>