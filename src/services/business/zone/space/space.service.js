import ApiService from "../../../api.service";

export default {
  bookingTime(zone, space, start_time, end_time) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/reserved-hours?start_time=${start_time}&end_time=${end_time}`);
  },
  list(zone) {
    return ApiService.get(`/business/zone/${zone}/spaces`);
  },
  view(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}?include=zoneSpaceWorkingHours`);
  },
  create(zone, data) {
    return ApiService.post(`/business/zone/${zone}/spaces/create`, data);
    // space_capacity
    // phone
    // description
    // category_id
    // images
  },
  update(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/update`, data);
    // space_capacity
    // phone
    // description
    // category_id
    // images
  },
  delete(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/delete/${space}`);
  },
  order(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/order`);
  },
  gameStart(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/start`, data);
    // start_time
  },
  completed(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/completed`, data);
    // order_id
  },
  continue(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/continue`);
  },
  gameStop(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/stop`, data);
    // order_id
  },
  zoneSpaceOrder(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/order`);
  },
  hardStop(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/hard-stop`, data);
    // hard_stop
  },
  todayBookCount(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/today-booking-count`);
  },
  zoneSpaceYearStatistic(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/year-statistics`);
  },
  zoneSpaceMonthStatistic(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/month-statistics`);
  },
  zoneSpaceWeekStatistic(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/weekly-statistics`);
  }
}