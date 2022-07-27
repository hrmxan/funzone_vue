<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3 tops__col">
    <a data-aos="fade-up" :href="href" class="tops__card h-100" >
      <div class="img__body">
        <img :src="img" alt="tops">
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
        default: '#'
      },
      img : {
        type: String,
        default: '#'
      },
      map: {
        type: String,
        default: '#'
      },
      type: {
        type: String,
        default: '#'
      },
      degre: {
        type: Number,
        default: 0
      },
      summa: {
        type: String,
        default: '#'
      },
      time: {
        type: String,
        default: '#'
      },
      status: {
        type: Boolean,
        default: false
      }
    }

  }
</script>

<style>

</style>