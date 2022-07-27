<template>
  <section class="topsport">
    <div class="container">
      <h1 data-aos="fade-right" class="section__title">
        Top sport arenas
      </h1>
      <div class="row tops__row">

        <div :key="topCard" v-for="topCard in getzoneSpaces.data" class="col-12 col-md-6 col-lg-4 col-xl-3 tops__col">
          <!-- <pre>
            {{ topCard }}
          </pre> -->
          <router-link data-aos="fade-up" :to="{ name: 'Insport', params: { id: topCard.zone_id, spaceId: topCard.id } }" class="tops__card h-100 aos-init aos-animate">
            <div class="img__body">
              <img :src="topCard.images[0]?.thumbnails?.full" alt="tops">
            </div>
            <strong class="name">
              {{topCard.address}}
            </strong>
            <div class="type-deagre">
              <span class="type button-free">
                {{topCard.category?.name}}
              </span>
              <span class="deagre">
                <span :key="a" v-for="a in Math.ceil(topCard.rate)" class="star_full"></span>
                <span :key="a" v-for="a in (5 - Math.ceil(topCard.rate))" class="star_free"></span>
              </span>
            </div>
            <strong class="summa">C {{topCard.price}} сум</strong>
            <div class="status">
              <span class="time">{{ soatlar(topCard.zoneSpaceWorkingHours) }}</span>
              <span v-if="topCard.isOpen" class="active open">Open</span>
              <span v-else class="active closed">Closed</span>
            </div>
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {

    data() {
      return {
        day: 0
      }
    },
    computed: {
      ...mapGetters({
        getTopCards: 'getTopCards',
        isLoading: 'getisLoading',
        getzoneSpacesError: 'getzoneSpacesError',
        getzoneSpaces: 'getzoneSpaces',
      })
    },
    methods: {
      ...mapActions([
        'getZones'
      ]),
      async updateSpaseZone() {
        await this.getZones();
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
      this.updateSpaseZone();
    },

  }
</script>

<style>

</style>