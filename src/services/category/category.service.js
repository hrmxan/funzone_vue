import ApiService from "../api.service";

export default {
  list() {
    return ApiService.get("/v1/category/");
  },
  view(id = "") {
    return ApiService.get(`/v1/category/${id}`);
  }
}