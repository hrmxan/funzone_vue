import ApiService from "../api.service";

export default {
  list() {
    return ApiService.get("/v1/zone-space-rating/");
  },
  view(id = "") {
    return ApiService.get(`/v1/zone-space-rating/${id}`);
  },
  create(data){
    return ApiService.post("/v1/zone-space-rating/create", data);
    // zone_space_id
    // rate
    // status
  }
}