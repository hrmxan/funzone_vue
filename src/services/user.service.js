import {
  TokenService
} from "./store.service";
import {
  ApiService
} from "./api.service";

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {
  logout() {
    TokenService.removeToken();
    TokenService.removeUploadPath();
    TokenService.removeUserName();
    ApiService.removeHeadder();
    ApiService.unmount401Interceptor();
  },
  registration(user) {
    return ApiService.post("/v1/user/register", user);
    // email
    // password
    // first_name
    // last_name
    // phone
    // birthday
    // gender
  },
  favoriteList(){
    return ApiService.get('/v1/user/favorite?include=category,zoneSpaceWorkingHours');
  },
  addFavorite(space_id){
    return ApiService.post('/v1/user/add-favorite',space_id);
  },
  orderList(){
    return ApiService.get('/v1/user/orders');
  },
  confirmEmail(data){
    return ApiService.get(`/v1/user/confirm-email?email=${data.email}&code=${data.code}`);
  },
  login(data) {
    return ApiService.post("/v1/user/login", data);
    // email
    // password
  },
  loginWithGoogle(data) {
    return ApiService.post(`/v1/user/social?service=${data.service}&access_token=${data.access_token}`);
  },
  getMe() {
    return ApiService.get("/v1/user/get-me");
  },
  userUpdate(user) {
    return ApiService.post("/v1/user/update", user);
    // first_name
    // last_name
    // phone
    // birthday
    // gender
  },
  changePassword(data){
    return ApiService.post('/v1/user/update-password',data);
    // old_password
    // new_password
    // password_confirm
  },
  forgetPassword(email){
    return ApiService.post('/v1/user/forget-password',email);
  },
  resetPassword(token){
    return ApiService.get(`/v1/user/reset-password?token=${token}`);
  }
}

export { UserService, AuthenticationError };