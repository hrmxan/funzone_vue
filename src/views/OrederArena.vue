<template>
<loader v-if="isLoading" />
  <section class="topsport">
    <div :class="{'close__wait': closeAction}" @click="closeActions" class="close__action"></div>
    <div class="container">
      <div class="order__top">
        <div class="search">
          <div class="input_body">
            <img src="@/assets/img/svg/searchh.svg" alt="">
            <input type="search" placeholder="Search">
          </div>
          <a data-aos="fade-up" class="button-full" href="#">Search</a>
        </div>
        <div class="filter">
          <div class="filter__top"></div>
          <div class="filter__body">
            <div class="filter_select">
              <div data-select="sport" @click="filterSelect(selectorsStatus.sport.name)" class="view__select">
                <span class="value select__click">{{sportSelect}}</span>
                <img src="@/assets/img/svg/vniz.svg" alt="vniz_ic">
              </div>
              <div :class="{'drobon': selectorsStatus.sport.active}" class="drobdow_sort sport">
                <label :key="a" v-for="a in getCategoryDate.data" for="fotbal_st">
                  <span @click="sportSelect = a.name">{{a.name}}</span>
                </label>
              </div>
            </div>
            <div class="filter_select">
              <div @click="filterSelect(selectorsStatus.time.name)" class="view__select">
                <span :class="{'d-none': timeselected.start && timeselected.end}" class="value_time ">Starting
                  time</span>
                <span :class="{'d-none': !timeselected.start || !timeselected.end}"
                  class="value_time ">{{`${timeselected.start} - ${timeselected.end}`}}</span>
                <img src="@/assets/img/svg/vniz.svg" alt="vniz_ic">
              </div>

              <div :class="{'drobon': selectorsStatus.time.active}" class="drobdow_sort time">
                <h3 :class="{'full': !timeselected.start}"><span>Starting
                    time</span><span>{{`:${timeselected.start}`}}</span></h3>
                <div class="time_line">
                  <a @click="timeselect.min = Number(timeselect.min) - 30" href="#" class="mute_buttons prev">
                    <img src="@/assets/img/svg/left.svg" alt="left">
                  </a>
                  <p><span class="hour">{{timeselect.hour}}</span> : <span class="min">{{timeselect.min}}</span></p>
                  <a @click="timeselect.min = 30 + Number(timeselect.min)" href="#" class="mute_buttons next">
                    <img src="@/assets/img/svg/right.svg" alt="left">
                  </a>
                </div>
                <h3 :class="{'full': timeselected.start}"><span>End time</span><span>{{`:${timeselected.end}`}}</span>
                </h3>
                <a @click="timeselected.start = `${timeselect.hour}:${timeselect.min}`"
                  :class="{'d-none': timeselected.start}" class="mute_buttons button-full time_line_submit"
                  href="#">Next</a>
                <a @click="clickOk" :class="{'d-none': !timeselected.start}"
                  class="mute_buttons button-full time_line_submit" href="#">Ok</a>
              </div>
            </div>

            <div class="filter_select price">
              <div @click="filterSelect(selectorsStatus.price.name)" class="view__select">
                <span
                :class="{'d-none': priceValue.select && priceValue.value}"
                 class="price__val">Price</span>
                <span
                :class="{'d-none': !priceValue.select && !priceValue.value}"
                class="price__val">{{priceValue.value}}</span>
                <img src="@/assets/img/svg/vniz.svg" alt="vniz_ic">
              </div>

              <div :class="{'drobon': selectorsStatus.price.active}" class="drobdow_sort price">
                <div class="label__body">
                  <label  :key="a" v-for="(a, index) in priceRadio" @click="priseRadioCheck = index, priceValue.select = a" class="radio__labels first">
                    <span :class="{'checked': priseRadioCheck === index}" class="mask"></span>
                    <span class="value">{{a}}</span>
                  </label>
                </div>
                <div class="range_wrapper">
                  <div class="container__double_range">
                    <div :style="sliderTrack" class="slider-track">
                      <span :style="range_btn1" class="first range_buttons">
                        <img src="@/assets/img/range.png" alt="range">
                        <span id="range1">
                          {{sliderOne}}
                        </span>
                      </span>
                      <span :style="range_btn2" class="last range_buttons">
                        <img src="@/assets/img/range.png" alt="range">
                        <span id="range2">
                          {{sliderTwo}}
                        </span>
                      </span>
                    </div>
                    <input type="range" min="0" :max="sliderMaxValue"
                    v-model="sliderOne" id="slider-1"
                      @input="slideOne">
                    <input type="range" min="0" :max="sliderMaxValue" v-model="sliderTwo" id="slider-2"
                      @input="slideTwo">
                  </div>
                </div>
                <a
                @click="clickPrice"
                href="#" class="button-full">OK</a>
              </div>
            </div>
            <div class="filter_select sort">
              <div @click="filterSelect(selectorsStatus.sort.name)" class="view__select">
                <span
                :class="{'d-none': sortValue}"
                 class="sort__val">Sort</span>
                <span
                :class="{'d-none': !sortValue}"
                 class="sort__val">{{sortValue}}</span>
                
                <img src="@/assets/img/svg/vniz.svg" alt="vniz_ic">
              </div>

              <div :class="{'drobon': selectorsStatus.sort.active}" class="drobdow_sort sort">
                <div class="label__body">
                  <label  :key="b" v-for="(b, index) in sortRadio" @click="sortRadioCheck = index, sortValue=b" class="radio__labels first">
                    <span :class="{'checked': sortRadioCheck == index}" class="mask"></span>
                    <span class="value">{{b}}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row tops__row">
        <!-- <pre>{{filterSpace}}</pre> -->
        <div :key="topCard.id" v-for="topCard in filterSpace" class="col-12 col-md-6 col-lg-4 col-xl-3 tops__col">
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
        <!-- <div :key="space.id" v-for="space in filterSpace">
          <pre v-if="space.length>0">
            {{space}}
          </pre>
        </div> -->
        <pre>
        </pre>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import loader from "@/components/minicomps/loader.vue";
  export default {
    data() {
      return {
        counter: 0,
        zoneSpaces: [],
        sliderMaxValue: 100,
        sliderOne: 0,
        sliderTwo: 100,
        minGap: 0,
        range_btn1: {
          left: 0,
        },
        range_btn2: {
          right: 0,
        },
        sliderTrack: {
          background: '#f5f5f5',
        },
        topCards: [],
        apires: '',
        closeAction: false,
        timeselect: {
          hour: '06',
          min: '00'
        },
        timeselected: {
          start: '',
          end: ''
        },
        selectorsStatus: {
          sport: {
            name: 'sport',
            active: false
          },
          time: {
            name: 'time',
            active: false
          },
          price: {
            name: 'price',
            active: false
          },
          sort: {
            name: 'sort',
            active: false
          }
        },
        sportSelect: 'sports',
        day: 0,
        sortValue: '',
        priceValue: {
          value: '',
          select: ''
        },
        priceRadio: ['Most cheapest', 'Most expensive'],
        sortRadio: ['Most visited', 'Most rated'],
        priseRadioCheck: -1,
        sortRadioCheck: -1,
      }
    },
    computed: {
      ...mapGetters({
        isLoading: 'getisLoading',
        getzoneSpaces: 'getzoneSpaces',
        getCategoryDate: 'getCategoryDate',
      }),
      filterSpace () {
        return this.zoneSpaces.filter(space => {
          return space.category.name == this.sportSelect;
        })
      },
    },
    created() {
      this.fillColor();
      this.updateSpaseZone();
    },
    components: {
      loader
    },
    watch: {
      'timeselect.min'(y) {
        if (y == 60) {
          this.timeselect.min = 0;
          this.timeselect.hour++;
        }
        if (y == 0) {
          this.timeselect.min = '00';
        }
        if (y == '-30') {
          this.timeselect.min = 30;
          this.timeselect.hour--;
        }
      },
      'timeselect.hour'(y) {
        if (y == 24) {
          this.timeselect.hour = 0;
        }
        if (y == '-1') {
          this.timeselect.hour = 23;
        }
      },
      sliderOne(y){
        if (y >= this.sliderTwo) {
          this.sliderOne = this.sliderTwo - 1;
        }
      },
      sliderTwo(y){
        if (y == this.sliderOne) {
          this.sliderTwo = this.sliderTwo + 1;
        }
      }
    },

    methods: {
      ...mapActions([
        'getZones',
        'getCategory'
      ]),
      async updateSpaseZone() {
        await this.getCategory();
        await this.getZones();
        this.zoneSpaces = this.getzoneSpaces.data;
        this.day = new Date().getDay();
        this.sportSelect = this.getCategoryDate.data[0].name;
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
      },
      closeActions() {
        this.closeAction = !this.closeAction;
        for (let select in this.selectorsStatus) {
          this.selectorsStatus[select].active = false;
        }
      },
      filterSelect(e) {
        for (let select in this.selectorsStatus) {
          if (e != select) {
            this.selectorsStatus[select].active = false;
          }
        }
        this.selectorsStatus[e].active = !this.selectorsStatus[e].active;
        if (this.selectorsStatus[e].active) this.closeAction = true;
        else this.closeAction = false;
      },
      clickOk() {
        this.timeselected.end = `${this.timeselect.hour}:${this.timeselect.min}`;
        for (let select in this.selectorsStatus) {
          this.selectorsStatus[select].active = false;
        }
        this.closeAction = false;
      },
      slideOne() {
        if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
          this.sliderOne.value = parseInt(this.sliderTwo.value) - this.minGap;
        }
        this.fillColor();
      },
      slideTwo() {
        if (parseInt(this.sliderTwo) - parseInt(this.sliderOne) <= this.minGap) {
          this.sliderTwo = parseInt(this.sliderOne) + this.minGap;
        }
        this.fillColor();
      },
      fillColor() {
        let percent1 = (this.sliderOne / this.sliderMaxValue) * 100;
        let percent2 = (this.sliderTwo / this.sliderMaxValue) * 100;
        this.range_btn1.left = percent1 + "%";
        this.range_btn2.right = 100 - percent2 + "%";
        this.sliderTrack.background =
          `linear-gradient(to right, #fff ${percent1}% , #F16B41 ${percent1}% , #C51841 ${percent2}%, #fff ${percent2}%)`;
      },
      clickPrice(){
        this.priceValue.value = `${this.sliderOne}-${this.sliderTwo}`;
        for (let select in this.selectorsStatus) {
          this.selectorsStatus[select].active = false;
        }
        this.closeAction = false;
      }
    }
  }
</script>

<style scoped>
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 span {
    display: flex;
    flex-shrink: 0;
  }

  .filter_select .drobdow_sort.time {
    min-width: 225px;
  }
</style>