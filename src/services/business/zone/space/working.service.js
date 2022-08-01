import ApiService from "../../../api.service";

export default {
  list(zone) {
    return ApiService.get(`/business/zone/${zone}/spaces?include=zoneSpaceWorkingHours`);
  },
  create(zone, space, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/working-hour/create`, data);
    // start_time
    // end_time
    // day
  },
  update(zone, space, day, data) {
    return ApiService.post(`/business/zone/${zone}/space/${space}/working-hour/update?day=${day}`, data);
    // [
    //   {
    //     "start_time":"1640617200",
    //     "end_time":"1640620800",
    //     "day":"3"
    //   },
    //   ...
    // ]
  },
  delete(zone, space) {
    return ApiService.get(`/business/zone/${zone}/space/${space}/working-hour/delete/112`);
  }
}