<template>
  <div class="col-12 col-md-8 col-lg-9 per__nav_col">
    <span class="per__line"></span>
    <h3 class="regist__past__title per__title">My saved zones</h3>

    <div class="row">
    
      <div :key="card" v-for="card in getfavoritedata?.data" class="col-12 col-lg-6 col-xl-4 tops__col">
        <a data-aos="fade-up" href="#" class="tops__card h-100">
          <div class="img__body">
            <img :src="card.images[0]?.thumbnails?.full">
          </div>
          <strong class="name">
            {{card.address}}
          </strong>
          <div class="type-deagre">
            <span class="type button-free">
              {{card?.category?.name}}
            </span>
            <span class="deagre">
              <span :key="a" v-for="a in Math.ceil(card.rate)" class="star_full"></span>
              <span :key="a" v-for="a in (5 - Math.ceil(card.rate))" class="star_free"></span>
            </span>
          </div>
          <strong class="summa">C {{card.price}} сум</strong>
          <div class="status">
            <span class="time">{{ soatlar(card.zoneSpaceWorkingHours) }}</span>
            <span v-if="card.isOpen == false" class="active closed">Closed</span>
            <span v-if="card.isOpen == true" class="active open">Open</span>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        getfavoritedata: 'getfavoritedata',
        getFavoriteError: 'getFavoriteError',
      })
    },
    data() {
      return {
        favorite: [],
        day: 0
      }
    },
    methods: {
      ...mapActions({
        getFavorite: 'getFavorite',
      }),
      async getFavorites() {
        await this.getFavorite();
        this.day = new Date().getDay();
      },
      butunvaqt(a){
        a = a/60;
        let soat = (a/60 < 10) ? `0${parseInt(a/60)}` : `${parseInt(a/60)}`;
        let minut = (a%60 < 10) ? `0${parseInt(a%60)}` : `${parseInt(a%60)}`;
        return `${soat}:${minut}`;
      },
      soatlar(timeObj) {
        let indays = [];
        // let thisdata = this.day;
        for (let obj in timeObj) {
          if (timeObj[obj].day == this.day) {
            indays.push(timeObj[obj]);
          }
        }
        let timestart = "";
        let timeend = "";
        if (indays.length >= 1) {
          timestart = this.butunvaqt(indays[0].start_time);
          timeend = this.butunvaqt(indays[indays.length-1].end_time);
        }
        return `${timestart} - ${timeend}`;
      }
    },
    created() {
      this.getFavorites();
    },
  }
</script>

<style>

</style>