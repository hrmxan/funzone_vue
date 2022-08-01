import ApiService from "../../api.service";

export default {
  login(data) {
    return ApiService.post("/business/user/login", data);
    // email
    // password
  },
  update(data) {
    return ApiService.post("/business/user/update", data);
    // first_name
    // last_name
    // phone
    // birthday
    // gender
  },
  register(data){
    return ApiService.post("/business/user/register", data);
    // email
    // password
    // first_name
    // last_name
    // phone
    // birthday
    // gender
  },
  confirmEmail(email,code){
    return ApiService.get(`/business/user/confirm-email?email=${email}&code=${code}`);
  },
  withGoogle(service, access_token){
    return ApiService.get(`/business/user/social?service=${service}&access_token=${access_token}`);
  },
  getMe(){
    return ApiService.get('/business/get-me');
  },
  userIsSpace(){
    return ApiService.get('/business/user/spaces');
  },
  employeSpaces(){
    return ApiService.get('/business/user/employee-spaces');
  }
}