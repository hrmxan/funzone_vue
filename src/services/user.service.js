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
  }
}

export { UserService, AuthenticationError };