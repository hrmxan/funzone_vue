import ApiService from "../api.service";

export default {
  list(){
    return ApiService.get("/v1/post");
  },
  view(id = ''){
    return ApiService.get(`/v1/post/${id}`);
  }
}