import ApiService from "../api.service";

export default {
  list() {
    return ApiService.get("/v1/zone");
  },
  nowAvaiable(){
    return ApiService.get("/v1/zone/spaces?include=category,zoneSpaceWorkingHours");
  },
  view(zone_id = ''){
    return ApiService.get(`/v1/zone/${zone_id}`);
  }
}