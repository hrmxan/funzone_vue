<template>
  <div class="col-12 col-md-8 col-lg-9 per__nav_col">
    <span class="per__line"></span>
    <h3 class="regist__past__title">My booked zones</h3>
    <div class="table_scroll">
      <table class="per__booking_table">
        <thead>
          <tr>
            <th></th>
            <th>monday
              27.09.2021</th>
            <th>Tuesday
              28.09.2021</th>
            <th>Wednesday
              29.09.2021</th>
            <th>thursday
              30.09.2021</th>
            <th>Friday
              1.10.2021</th>
            <th>Saturday
              2.10.2021</th>
            <th>sunday
              3.10.2021</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>10:00 - 11:00</th>
            <td class="booked">
              <a href="#" class="mute_buttons booking__link">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
              <div class="mask">
                <strong>
                  The name of sport complex
                </strong>
                <a href="#">
                  <span>Go profile</span>
                </a>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>16:30 - 18:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>20:30 - 21:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="last">
            <th>20:00 - 23:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <section class="secelted__insport">
      <div :key="card"
      v-for="card in personalBooking.data"
       class="card__select__insport_wrap">
        <div class="card__select__insport">
          <div class="name__zone">
            <strong>The name of sport zone</strong>
            <p>
              <img src="img/svg/Location.svg">
              {{card.zoneSpace.address}}
            </p>
          </div>
          <div class="date other">
            <p>Date</p>
            <strong>Mon {{new Date(card.start_at * 1000).getUTCDate()}}</strong>
          </div>
          <div class="start other">
            <p>Start time</p>
            <strong>{{new Date(card.start_at * 1000).getHours()}}:{{new Date(card.start_at * 1000).getMinutes()}}</strong>
          </div>
          <div class="end other">
            <p>End time</p>
            <strong>{{new Date(card.end_at * 1000).getHours()}}:{{new Date(card.end_at * 1000).getMinutes()}}</strong>
          </div>
        </div>
        <a href="#" class="cansel_button mute_buttons">
          <img src="@/assets/img/svg/close.svg" alt="close">
          <span class="d-none d-lg-inline-block">Cancel order</span>
        </a>
      </div>

      <pre>
        {{personalBooking}}
      </pre>

    </section>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        personalBooking: 'personalBooking',
        personalBookingError: 'personalBookingError',
      })
    },
    methods: {
      ...mapActions({
        getPersonalBooking: 'getPersonalBooking',
      }),
      async getBookings() {
        await this.getPersonalBooking();
        console.log('bookingData', this.personalBooking);
        console.log('BookingError', this.personalBookingError);
      },
    },
    created() {
      this.getBookings();
    },
  }
</script>

<style>

</style>