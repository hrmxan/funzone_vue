import ApiService from "../api.service";

export default {
  byCategory(){
    return ApiService.get(`/v1/zone/spaces/?ZoneSpaceSearch[top]=1`);
  },
  topInZone(zone){
    return ApiService.get(`/v1/zone/${zone}/spaces/?ZoneSpaceSearch[top]=`);
  },
  topAll(){
    return ApiService.get(`/v1/zone/spaces?ZoneSpaceSearch[top]=1`);
  },
  allZones(){
    return ApiService.get("/v1/zone/spaces");
  },
  openInZone(zone){
    return ApiService.get(`/v1/zone/${zone}/spaces?ZoneSpaceSearch[open]=1&include=zoneSpaceWorkingHours`);
  },
  openAll(){
    return ApiService.get("/v1/zone/spaces?ZoneSpaceSearch[open]=1");
  },
  reservedHaurs(zone,space,start_time,end_time){
    return ApiService.get(`/v1/zone/${zone}/spaces/${space}/reserved-hours?start_time=${start_time}&end_time=${end_time}`);
  },
  spaceFilter(slug){
    return ApiService.get(`/v1/zone/spaces/filter?slug=${slug}`);
  },
  spaceSearch(name){
    return ApiService.get(`/v1/zone/spaces/filter?name=${name}`);
  },
  view(zone_id,space_id){
    return ApiService.get(`/v1/zone/${zone_id}/spaces/${space_id}?include=zoneSpaceWorkingHours,zone`);
  },
  workingHours(zone_id,space_id){
    return ApiService.get(`/v1/zone/${zone_id}/spaces/${space_id}?include=zoneSpaceWorkingHours`);
  },
  create(data){
    return ApiService.post("/v1/zone/create", data);
    // space_capacity
    // phone
    // description[uz]
    // description[ru]
    // description[en]
    // category_id
    // images
  },
  priceList(zone_id,space_id,day){
    return ApiService.get(`/v1/zone/${zone_id}/spaces/${space_id}/prices?day=${day}`);
  },
  priceCreate(zone_id,space_id,data){
    return ApiService.post(`/v1/zone/${zone_id}/spaces/${space_id}/prices/create`, data);
    // price
    // start_time
    // end_time
    // working_hour_id
    // day
  }
}