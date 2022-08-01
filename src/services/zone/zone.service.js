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
  },
  create(data){
    return ApiService.post("/v1/zone/create", data);
    // user_id
    // lat
    // lon
    // name[en]
    // name[ru]
    // name[uz]
    // address
    // images
  }
}