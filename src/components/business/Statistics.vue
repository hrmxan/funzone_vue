<template>
  <h3 class="regist__past__title">
    Statistics
  </h3>
  <div class="row cat__row">

    <div class="col-12">
      <div class="situation__ontime_card">
        <span class="left_line"></span>
        <div class="content">
          <strong>The name of sport zone</strong>
          <p>
            <img src="@/assets/img/svg/Location.svg" alt="icn">
            Tashkent city, Shayxontohur district Beruniy street near to EVOS
          </p>
        </div>
        <a class="click__btn" href="#">Closed</a>
      </div>
    </div>
    <div class="col-12">
      <div class="situation__ontime_card green">
        <span class="left_line"></span>
        <div class="content">
          <strong>The name of sport zone</strong>
          <p>
            <img src="@/assets/img/svg/Location.svg" alt="icn">
            Tashkent city, Shayxontohur district Beruniy street near to EVOS
          </p>
        </div>
        <a class="click__btn" href="#">Closed</a>
      </div>
    </div>
    <div class="col-12">
      <div class="situation__ontime_card blue">
        <span class="left_line"></span>
        <div class="content">
          <strong>The name of sport zone</strong>
          <p>
            <img src="@/assets/img/svg/Location.svg" alt="icn">
            Tashkent city, Shayxontohur district Beruniy street near to EVOS
          </p>
        </div>
        <a class="click__btn" href="#">Closed</a>
      </div>
    </div>

  </div>

  <h3 class="regist__past__title">
    Statistics
  </h3>

  <div class="row cat__row">

    <div class="col-4">
      <div class="zona__type_card">
        <p>Today booked</p>
        <strong>34</strong>
      </div>
    </div>
    <div class="col-4">
      <div class="zona__type_card played">
        <p>Today played</p>
        <strong>11</strong>
      </div>
    </div>
    <div class="col-4">
      <div class="zona__type_card canseled">
        <p>Canceled orders</p>
        <strong>2</strong>
      </div>
    </div>

  </div>

  <h3 class="regist__past__title">
    Profit statistic charts
    <div class="controllers">
      <a href="#!">
        Week
      </a>
      <a href="#!" class="active">
        Month
      </a>
      <a href="#!">
        Year
      </a>
    </div>
  </h3>

  <div class="row cat__row chart_row">
    <!-- <canvas id="myChart" height="333px"></canvas> -->
    <Bar class="chart_bar" :styles="myStyles" :chart-data="chartData" :chart-options="chartOptions" />
    <!-- <Doughnut :chart-data="chartData" :chart-options="chartOptions" /> -->
  </div>

  <div class="doughnut__diagram">
    <div class="row cat__row doughnut__diagram_row">
      <div class="col-12">
        <h3 class="regist__past__title">
          Profit statistic charts
        </h3>
      </div>
      <div class="col-12 col-sm-4 doughnut__diagram_sircule">
        <div class="text">
          <p class="day">Days</p>
          <strong>72%</strong>
        </div>
        <!-- <canvas id="myChart2"></canvas> -->
      </div>
      <div class="col-12 col-sm-8">
        <div class="doughnut__diagram__stat">
          <div class="row">
            <div class="col-4">
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <span class="number">1</span>
                <div class="item_body">
                  <div class="to_from">
                    <span>300 hr</span>
                    <span>372 hr</span>
                  </div>
                  <div class="line">
                    <span class="line_pros"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Bar,
  } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    components: {
      Bar,
    },
    mounted() {

    },
    computed: {
      myStyles() {
        return {
          position: 'relative',
        }
      },
    },
    data() {
      return {
        chartData: {
          labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: '#0B6BFB',
            data: [200000, 900000, 561651, 5619656, 9000000, 1000000, 600000, 6519616, 7165651, 19166512, 1655155,
              9819156
            ]
          }]
        },
        chartOptions: {
          responsive: true,
        }
      }
    },

  }
</script>

<style>
  canvas {
    height: 500px !important;
  }
</style>