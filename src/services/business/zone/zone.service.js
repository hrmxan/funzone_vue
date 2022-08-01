import ApiService from "../../api.service";

export default {
  list(){
    return ApiService.get('/business/zone');
  },
  view(id){
    return ApiService.get(`/business/zone/${id}`);
  },
  create(data){
    return ApiService.post('/business/zone', data);
    // lat
    // lon
    // name[en]
    // name[ru]
    // name
    // address
    // images
  },
  delete(id){
    return ApiService.delete(`/business/zone/delete/${id}`);
  },
  update(id, data){
    return ApiService.post(`/business/zone/update/${id}`, data);
    // lat
    // lon
    // name[en]
    // name[ru]
    // name
    // address
    // images
  }
}