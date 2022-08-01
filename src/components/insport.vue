<template>
  <section class="insport_top">
    <!-- <notifications position="top right" /> -->
    <div class="container">

      <div class="top_title d-flex flex-column flex-sm-row">
        <h1 class="mb-4">{{zoneName}}</h1>
        <div class="buttons">
          <a class="button-free" @click.prevent="setFafourite(getZoneData.id)" href="#">Save</a>
          <router-link class="button-full justify-content-between" to="/reserve">Reserve</router-link>
        </div>
      </div>
      <alert :success="favoriteSpaceStatus.message" />
      <div class="row top__body_row">
        <div class="col-12 col-lg-7 col-xl-8 mb-4">
          <img id="mainSlayd" :src="main_img" class="main__card_img" alt="main_card">
          <div class="main__card_slider">
            <div class="swiper-button-next">
              <img src="@/assets/img/svg/next.svg" alt="back">
            </div>
            <div class="swiper-button-prev">
              <img src="@/assets/img/svg/back.svg" alt="back">
            </div>
            <!-- <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div data-slide="#mainSlayd" class="swiper-slide">
                  <img src="@/assets/img/main__mini__card.png" alt="main_mini">
                </div>
                <div data-slide="#mainSlayd" class="swiper-slide">
                  <img src="@/assets/img/main__mini__card2.png" alt="main_mini">
                </div>
                <div data-slide="#mainSlayd" class="swiper-slide">
                  <img src="@/assets/img/main__mini__card3.png" alt="main_mini">
                </div>
                <div data-slide="#mainSlayd" class="swiper-slide">
                  <img src="@/assets/img/main__mini__card4.png" alt="main_mini">
                </div>
                <div data-slide="#mainSlayd" class="swiper-slide">
                  <img src="@/assets/img/main__mini__card.png" alt="main_mini">
                </div>
              </div>
            </div> -->


            <swiper :slides-per-view="4" :slides-per-group="1" :space-between="20" :navigation="true"
              :pagination="{ clickable: true }" class="swiper">
              <swiper-slide :key="item" v-for="item in getZoneData.images" @click="main_img = item.thumbnails.full">
                <img class="images-item" :src="item.thumbnails.small">
              </swiper-slide>
            </swiper>

          </div>
          <div class="main__card_about">
            <div class="post_title">
              <img src="@/assets/img/svg/list.svg" alt="ic">
              Description
            </div>
            <p>
              {{getZoneData.description}}
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-5 col-xl-4 mb-4">
          <div class="main__card_rate main__card_right_line">
            <div class="top">
              <img src="@/assets/img/svg/star.svg" alt="star">
              Rate
            </div>
            <span class="deagre">
              <span :key="a" v-for="a in stars" class="star_full"></span>
              <span :key="a" v-for="a in 5-stars" class="star_free"></span>
            </span>
          </div>
          <div class="main__card_work main__card_right_line">
            <div class="top">
              <img src="@/assets/img/svg/clock.svg" alt="star">
              Working Hours
              <span v-if="getZoneData.isOpen" class="active open">Open</span>
              <span v-if="!getZoneData.isOpen" class="active closed">Closed</span>
            </div>
            <p><span>MON - SUN</span><span>{{ soatlar(getZoneData.zoneSpaceWorkingHours) }}</span></p>
          </div>
          <div class="main__card_phone main__card_right_line">
            <div class="top">
              <img src="@/assets/img/svg/phone.svg" alt="star">
              Phone Number
            </div>
            <div class="numbers">
              <span></span>
              <p>{{getZoneData.phone}}</p>
            </div>
          </div>
          <div class="main__card_locate main__card_right_line">
            <div class="top">
              <img src="@/assets/img/svg/Location.svg" alt="star">
              Location
            </div>
            <p>{{getZoneData.address}}</p>
            <div class="mapouter__insports">
              <div class="gmap_canvas"><iframe id="gmap_canvas"
                  src="https://maps.google.com/maps?q=toshkent%20axborot%20tehnalogiyalari%20universituti&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="calendar__insport">
    <div class="container">
      <div class="table_scroll">
        <table class="per__booking_table insport__table">
          <thead>
            <tr>
              <th></th>
              <th class="ht_time">
                <div class="th__body">
                  <div class="top">
                    <img src="@/assets/img/svg/Shade.svg" alt="shade">
                    Morning
                  </div>
                  <div class="times">
                    <span>0:00</span>
                    <span>1:00</span>
                    <span>2:00</span>
                    <span>3:00</span>
                    <span>4:00</span>
                    <span>5:00</span>
                  </div>
                </div>
              </th>
              <th class="ht_time">
                <div class="th__body">
                  <div class="top">
                    <img src="@/assets/img/svg/Shade.svg" alt="shade">
                    Morning
                  </div>
                  <div class="times">
                    <span>6:00</span>
                    <span>7:00</span>
                    <span>8:00</span>
                    <span>9:00</span>
                    <span>10:00</span>
                    <span>11:00</span>
                  </div>
                </div>
              </th>
              <th class="ht_time">
                <div class="th__body">
                  <div class="top">
                    <img src="@/assets/img/svg/Shade.svg" alt="shade">
                    Morning
                  </div>
                  <div class="times">
                    <span>12:00</span>
                    <span>13:00</span>
                    <span>14:00</span>
                    <span>15:00</span>
                    <span>16:00</span>
                    <span>17:00</span>
                  </div>
                </div>
              </th>
              <th class="ht_time">
                <div class="th__body">
                  <div class="top">
                    <img src="@/assets/img/svg/Shade.svg" alt="shade">
                    Morning
                  </div>
                  <div class="times">
                    <span>18:00</span>
                    <span>19:00</span>
                    <span>20:00</span>
                    <span>21:00</span>
                    <span>22:00</span>
                    <span>23:00</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr :key="index" v-for="(day,index) in timeSort" @mousedown="mousedown" @mouseup="mouseup"
              @mouseleave="mouseleave">
              <th>monday
                27.09.2021
              </th>
              <td :key="box" v-for="box in 4" class="bookeding">
                <div class="bookeding_body">
                  <span :key="t" v-for="t in 12" @mousedown="timefirst(index,box,t)"
                    @mouseenter="timesecond(index,box,t)" @click="proba"
                    :class="{'booked_now': timeId(index,box,t)>=start_select && timeId(index,box,t)<=end_select, 'start': timeId(index,box,t)==start_select, 'end': timeId(index,box,t)==end_select}"
                    class="Booking_item">
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pre>
          {{jadval}}
        </pre>
      </div>
    </div>
  </section>

  <section class="secelted__insport">
    <div class="container">
      <div class="card__select__insport">
        <div class="name__zone">
          <strong>The name of sport zone</strong>
          <p>
            <img src="img/svg/Location.svg">
            Tashkent city, Shayxontohur district Beruniy street near to EVOS
          </p>
        </div>
        <div class="date other">
          <p>Date</p>
          <strong>Mon 27</strong>
        </div>
        <div class="start other">
          <p>Start time</p>
          <strong>10:00</strong>
        </div>
        <div class="end other">
          <p>End time</p>
          <strong>11:00</strong>
        </div>
      </div>
      <div class="card__select__insport">
        <div class="name__zone">
          <strong>The name of sport zone</strong>
          <p>
            <img src="img/svg/Location.svg">
            Tashkent city, Shayxontohur district Beruniy street near to EVOS
          </p>
        </div>
        <div class="date other">
          <p>Date</p>
          <strong>Mon 27</strong>
        </div>
        <div class="start other">
          <p>Start time</p>
          <strong>10:00</strong>
        </div>
        <div class="end other">
          <p>End time</p>
          <strong>11:00</strong>
        </div>
      </div>
      <div class="card__select__insport">
        <div class="name__zone">
          <strong>The name of sport zone</strong>
          <p>
            <img src="img/svg/Location.svg">
            Tashkent city, Shayxontohur district Beruniy street near to EVOS
          </p>
        </div>
        <div class="date other">
          <p>Date</p>
          <strong>Mon 27</strong>
        </div>
        <div class="start other">
          <p>Start time</p>
          <strong>10:00</strong>
        </div>
        <div class="end other">
          <p>End time</p>
          <strong>11:00</strong>
        </div>
      </div>
    </div>
    <pre>
    </pre>
  </section>

  <section class="other__zones">
    <div class="container">
      <h3 class="inssport__h3">Other zones of sport complex</h3>
      <div class="row tops__row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 tops__col">
          <a data-aos="fade-up" href="#" class="tops__card h-100">
            <div class="img__body">
              <img src="img/tops1.png" alt="tops">
            </div>
            <strong class="name">
              Shayxontohur district, Beruniy street near to EVOS
            </strong>
            <div class="type-deagre">
              <span class="type button-free">
                Football stadium
              </span>
              <span class="deagre">
                <span class="star_full"></span>
                <span class="star_full"></span>
                <span class="star_full"></span>
                <span class="star_full"></span>
                <span class="star_full"></span>
              </span>
            </div>
            <strong class="summa">C 22 000 сум</strong>
            <div class="status">
              <span class="time">09:00-24:00</span>
              <span class="active open">Open</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="clients__say">
    <div class="container">
      <h3 class="inssport__h3">
        What clients say
      </h3>
      <div class="row clients__say_row">
        <div class="col-12 col-md-4 mb-4">
          <div class="clients__say__card">
            <p class="message">
              I am a fan of Jasur Umirov it means I am Jasur Umirov’s fan club member that’s why I am a fan of Jasur
              Umirovvvvvv 😎
            </p>
            <div class="user">
              <img src="@/assets/img/user__say1.png" alt="user">
              <div class="user_date">
                <strong class="name">Shukhrat Begmatov</strong>
                <p class="time">Everyday morning</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="clients__say__card">
            <p class="message">
              Had part in stock, quick collection time, good customer service 🙂
            </p>
            <div class="user">
              <img src="@/assets/img/user__say2.png" alt="user">
              <div class="user_date">
                <strong class="name">Cristiano Ronaldo</strong>
                <p class="time">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="clients__say__card">
            <p class="message">
              Nice clothes, good prices, fast shipping and no problems at all with sizes
            </p>
            <div class="user">
              <img src="@/assets/img/user__say3.png" alt="user">
              <div class="user_date">
                <strong class="name">Odil Ahmedov</strong>
                <p class="time">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y
  } from 'swiper';

  // Import Swiper Vue.js components
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';

  import success from '../core/toast.options';



  // Import Swiper styles
  import 'swiper/swiper-bundle.min.css'
  import 'swiper/swiper.min.css'
  import 'swiper/components/navigation/navigation.min.css'
  import 'swiper/components/pagination/pagination.min.css'


  import {
    mapActions,
    mapGetters,
    mapMutations,
    mapState
  } from 'vuex';
  import alert from './alerts.vue';
  export default {
    components: {
      Swiper,
      SwiperSlide,
      alert,
    },
    data() {
      return {
        stars: 0,
        myWeekin: '',
        day: 0,
        modules: {
          navigation: Navigation,
          pagination: Pagination,
          scrollbar: Scrollbar,
          a11y: A11y,
        },
        main_img: '',
        first_click: false,
        space: {},
        first_time: -1,
        second_time: -1,
        start_select: -1,
        end_select: -1,
        book_now: -1,
        book_modal: false,
      }
    },
    mounted() {},
    computed: {
      ...mapGetters({
        getZoneData: 'getZoneData',
        getzoneSpaces: 'getzoneSpaces',
        zoneName: 'zoneName',
        favoriteSpaceStatus: 'favoriteSpaceStatus',
        favoriteSpaceError: 'favoriteSpaceError',
      }),
      ...mapState({
        this_price: state => state.order.price,
      }),
      booking() {
        if (this.first_click && this.start_select != -1 && this.end_select != -1) {
          return parseInt((this.end_select + this.start_select) / 2);
        } else {
          return -1;
        }
      },
      jadval() {
        let local_id = 0;
        let dot = this.myWeekin;
        // 86400000 = 1 day in ms
        let myweek = [];
        for (let i = 0; i < 7; i++) {
          let day = [];
          for (let j = 0; j < 48; j++) {
            day.push({
              start: dot,
              end: dot + 1800000,
              id: local_id,
            });
            dot += 1800000;
            local_id++;
          }
          myweek.push(day);
        }
        return myweek;
      },
      timeSort() {
        let week = [];
        let w0 = [],
          w1 = [],
          w2 = [],
          w3 = [],
          w4 = [],
          w5 = [],
          w6 = [];
        this.space ?.zoneSpaceWorkingHours?.forEach(item => {
          switch (item.day) {
            case 0:
              w0.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            case 1:
              w1.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            case 2:
              w2.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            case 3:
              w3.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            case 4:
              w4.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            case 5:
              w5.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            case 6:
              w6.push({
                start: this.inTime(item.start_time),
                end: this.inTime(item.end_time),
                id: item.id
              });
              break;
            default:
              break;
          }
          week.push({
            start: this.inTime(item.start_time),
            end: this.inTime(item.end_time),
            id: item.id
          });
        })
        week = [w0, w1, w2, w3, w4, w5, w6];
        return week
      }
    },
    watch: {
      book_modal(val) {
        if (this.start_select != -1 && this.end_select != -1 && val) {
          console.log(val);
          this.booking_now();
        }
      },
      second_time(val) {
        // console.log('SECOND',val);
        // console.log('FIRST',this.first_time);
        if (val > this.first_time) {
          this.start_select = this.first_time;
          this.end_select = val;
        } else {
          this.start_select = val;
          this.end_select = this.first_time;
        }

      },
      end_select(val) {
        if (this.start_select != -1 && val != -1) {
          this.book_now = parseInt((val + this.start_select) / 2);
        } else {
          this.book_now = -1;
        }
      },
    },
    methods: {
      ...mapActions({
        getZone: 'getZone',
        getZones: 'getZones',
        getZoneName: 'getZoneName',
        setFafouriteSpace: 'setFafouriteSpace',
        checkPrice: 'checkPrice',
      }),
      success,
      async booking_now() {
        await this.$swal.fire({
          title: 'Do you want to save the changes?',
          text: "You won't be able to revert this!",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            let times = {
              start_at: 0,
              end_at: 0,
              zone_id: this.$route.params.id,
              space_id: this.$route.params.spaceId,
            };
            // {id: '5', spaceId: '8'}
            this.jadval.forEach(item => {
              item.forEach(item2 => {
                if (item2.id == this.start_select) {
                  times.start_at = parseInt(item2.start / 1000);
                }
                if (item2.id == this.end_select) {
                  times.end_at = parseInt(item2.end / 1000);
                }
              })
            });
            // this.checkPrice(times);
            this.$store.dispatch('order/checkPrice', times);
            this.cleartime();
          } else if (result.isDismissed) {
            this.cleartime();
          }
        })
        // console.log(success.info('ajab boldi'));
      },
      cleartime(){
        this.book_modal = false;
        this.space = {};
        this.first_click = false;
        this.first_time = -1;
        this.second_time = -1;
        this.start_select = -1;
        this.end_select = -1;
        this.book_now = -1;
      },
      timeId(day, box, t) {
        return this.jadval[day][(box - 1) * 12 + t - 1].id;
      },
      proba() {
        // console.log(this.start_select, this.end_select, this.book_now);
        // console.log(this.first_time, this.second_time);
        // console.log(this.start_select, this.end_select);
      },
      timefirst(day, box, t) {
        this.first_time = this.timeId(day, box, t);
        this.second_time = this.timeId(day, box, t);
      },
      timesecond(day, box, t) {
        if (this.first_click) {
          this.second_time = this.timeId(day, box, t);
        }
      },
      kunnitop() {
        let a = new Date();
        let b = new Date(a.getTime() - (a.getDay() * 86400000));
        b = (new Date(`${b.getFullYear()}-${b.getMonth()+1}-${b.getDate()}`)).getTime();
        this.myWeekin = b;
      },
      inTime(time) {
        let a = new Date();
        a = new Date(`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`);
        a = a.getTime() + time * 1000;
        return a;
      },
      mousedown() {
        this.first_click = true;
      },
      mouseup() {
        this.first_click = false;
        this.book_modal = true;
         if (this.start_select != -1 && this.end_select != -1) {
          this.book_modal = true;
        }
      },
      mouseleave() {
        this.first_click = false;
        if (this.start_select != -1 && this.end_select != -1) {
          this.book_modal = true;
        }
      },
      ...mapMutations({
        destroyFavoriteSpace: 'destroyFavoriteSpace',
      }),
      async getterZone(zone) {
        this.day = new Date().getDay();
        await this.getZone(zone);
        await this.getZoneName(zone?.id);
        this.space = this.getZoneData;
        this.stars = Math.ceil(this.getZoneData.rate);
        this.main_img = this.getZoneData.images[0].thumbnails.full;

      },
      async setFafourite(space_id) {
        await this.setFafouriteSpace(space_id);
        setTimeout(() => {
          this.destroyFavoriteSpace();
        }, 2000);
      },
      butunvaqt(a) {
        a = a / 60;
        let soat = (a / 60 < 10) ? `0${parseInt(a/60)}` : `${parseInt(a/60)}`;
        let minut = (a % 60 < 10) ? `0${parseInt(a%60)}` : `${parseInt(a%60)}`;
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
          timeend = this.butunvaqt(indays[indays.length - 1].end_time);
        }
        return `${timestart} - ${timeend}`;
      },
    },
    created() {
      this.getterZone(this.$route.params);
      this.kunnitop();
    },
  }
</script>

<style>
  .images-item {
    height: 85px !important;
    width: 100% !important;
    object-fit: cover;
    cursor: pointer;
  }

  .main__card_img {
    height: 400px !important;
    width: 100%;
    object-fit: cover;
  }

  .Booking_item:hover {
    background-color: rgba(55, 199, 86, 0.2);
  }
</style>