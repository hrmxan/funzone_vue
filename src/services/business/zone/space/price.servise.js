import ApiService from "../../../api.service";

export default {
  list(zone, space, day) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/prices?day=${day}`);
  },
  updated(zone, space, day, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/prices/update?day=${day}`, data);
    // [
    //   {
    //     "start_time":"1640617200",
    //     "end_time":"1640620800",
    //     "day":"3"
    //   },
    //   ...
    // ]
  },
  create(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/prices/create`, data);
    // [
    //   {
    //     "start_time":"1640617200",
    //     "end_time":"1640620800",
    //     "day":"3"
    //   }
    // ]
  }
}