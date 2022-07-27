<template>
  <section class="tips__nav">
    <div class="container">
      <h1 data-aos="fade-right" class="section__title">
        Now available arenas
      </h1>
      <div class="row tips__nav_row">
        <div class="col-12 col-lg-4 col-xl-3 tips__nav_nav">
          <div data-aos="fade-right" class="nav__body">
            <tipsNavItem
            :key="index" v-for="(item,index) in getCategoryDate.data"
            :title="item.name"
            @click="cattopish(index,item.id)"
            :class="{'active': activeindex==index}"
            >
            </tipsNavItem>
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="row">


        <div :key="topCard" v-for="topCard in zones" class="col-12 col-lg-6 col-xl-4 tops__col">
          <a data-aos="fade-up" href="insport.html" class="tops__card h-100 aos-init aos-animate">
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
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tipsNavItem from "../minicomps/tipsNavItem.vue";
import { mapGetters, mapActions } from "vuex";

  export default {
  components: { tipsNavItem },
    data (){
      return {
        day: 0,
        topCards: [
          {
            href: 'insport.html',
            img: 'tops1.png',
            map: 'Shayxontohur district, Beruniy street near to EVOS',
            type: 'Football stadium',
            degre: 4,
            summa: '22 000',
            time: '09:00-24:00',
            status: true
          },
          {
            href: 'insport.html',
            img: 'tops2.png',
            map: 'Almazar district, Beruniy street B-14 home',
            type: 'Gym (fitness)',
            degre: 3,
            summa: '35 000',
            time: '09:00-24:00',
            status: false
          },
          {
            href: 'insport.html',
            img: 'tops3.png',
            map: 'Yakkasaroy district, Bog’i street PR-15',
            type: 'Ping-Pong',
            degre: 2,
            summa: '35 000',
            time: '09:00-24:00',
            status: false
          },
          {
            href: 'insport.html',
            img: 'tops1.png',
            map: 'Shayxontohur district, Beruniy street near to EVOS',
            type: 'Football stadium',
            degre: 5,
            summa: '22 000',
            time: '09:00-24:00',
            status: true
          },
          {
            href: 'insport.html',
            img: 'tops2.png',
            map: 'Almazar district, Beruniy street B-14 home',
            type: 'Gym (fitness)',
            degre: 5,
            summa: '35 000',
            time: '09:00-24:00',
            status: false
          },
          {
            href: 'insport.html',
            img: 'tops3.png',
            map: 'Yakkasaroy district, Bog’i street PR-15',
            type: 'Ping-Pong',
            degre: 3,
            summa: '35 000',
            time: '09:00-24:00',
            status: false
          }
        ],
        activeindex: 0,
        ontip: 0,
        zones: []
      }
    },
    computed: {
      ...mapGetters({
        getCategoryDate: 'getCategoryDate',
        getzoneSpaces: 'getzoneSpaces'
      })
    },
    mounted() {
      this.ontips();
    },
    methods: {
      ...mapActions({
        getCategory: 'getCategory',
        getZones: 'getZones'
      }),
      async ontips() {
        // await this.getCategory();
        await this.getZones();
        this.day = new Date().getDay();
        this.ontip = this.getCategoryDate.data[0].id;
        console.log(this.getCategoryDate.data[0].id);
        this.cattopish(this.activeindex, this.ontip);
      },
      cattopish(index,id) {
        console.log(index);
        this.activeindex = index;
        this.zones = [];
        for (let a of this.getzoneSpaces.data) {
          if (a.category_id == id) {
            this.zones.push(a);
          }
        }
      },
      butunvaqt(a){
        a = a/60;
        let soat = (a/60 < 10) ? `0${parseInt(a/60)}` : `${parseInt(a/60)}`;
        let minut = (a%60 < 10) ? `0${parseInt(a%60)}` : `${parseInt(a%60)}`;
        return `${soat}:${minut}`;
      },
      soatlar(timeObj) {
        let indays = [];
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

  }
</script>

<style>

</style>