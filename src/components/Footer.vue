<template>
  <div class="container">
    <div class="top__line"></div>
    <div class="row">
      <div class="col-12 col-lg-4 brend__links">
        <router-link to="/" class="logo_f">
          <img class="brend" src="@/assets/img/svg/logo_brand.svg" alt="logo">
          <img class="name" src="@/assets/img/svg/logo_name.svg" alt="logo">
        </router-link>
        <div class="links">
          <a href="#">
            <img src="@/assets/img/svg/fb.svg" alt="phone">
          </a>
          <a href="#">
            <img src="@/assets/img/svg/linked.svg" alt="phone">
          </a>
          <a href="#">
            <img src="@/assets/img/svg/twit.svg" alt="phone">
          </a>
        </div>
      </div>
      <div :key="index" v-for="(accardion, index) in accardions" class="col-12 col-lg-2">
        <accardion  
        :title="accardion.title"
        :items="accardion.items" :index="index"
        :class="{
          'border-0': accardions.length-1==index,
          'closed': activeindex!=index
          }"
        @click="activeindex==index?activeindex=-1:activeindex=index">
        </accardion>
      </div>

      <div class="col-12">
        <p class="copyread">
          © 2021 Lift Media. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import accardion from './minicomps/accardion.vue'
  export default {
    components: {
      accardion
    },
    data() {
      return {
        accardions: [{
            title: 'Order arena',
            items: [{
                title: 'Top arenas',
                link: '#'
              },
              {
                title: 'Most rated arenas',
                link: '#'
              },
              {
                title: 'Now available arenas',
                link: '#'
              }
            ]
          },
          {
            title: 'Features',
            items: [{
                title: 'Our features',
                link: '#'
              },
              {
                title: 'Easy ordering',
                link: '#'
              }
            ]
          },
          {
            title: 'About us',
            items: [{
                title: 'Contact us',
                link: '#'
              },
              {
                title: 'Subscribe',
                link: '#'
              }
            ]
          },
          {
            title: 'legal',
            items: [{
                title: 'Privacy Policy',
                link: '#'
              },
              {
                title: 'Terms of Service',
                link: '#'
              }
            ]
          }
        ],
        activeindex: -1,
      }
    }
  }
</script>

<style>

</style>