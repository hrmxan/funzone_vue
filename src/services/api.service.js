import axios from "axios";
import {
  TokenService
} from "./store.service";
import myToast from "../core/toast.options"
import store from "../store/index";
// import bus from "../main";



// axios.interceptors.request.use(function (config) {
//   config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

let messageShow = true;

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  setHeader() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getToken()}`;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource, showMes = true) {
    messageShow = showMes;
    return axios.get(resource);
  },
  post(resource, data, showMes = true) {
    messageShow = showMes;
    return axios.post(resource, data);
  },

  mount401Interceptor() {
    axios.interceptors.response.use(
      (response) => {
        console.log("INTERSEPTOR ICHIDA RES", response);
        return response;
      },
      async (error) => {
        console.log("INTERSEPTOR ICHIDA ERROR", error.response.status);
        this.i++;
        if (this.i == 1 && messageShow) {
          if (error.response.status === 401) {
            await store.dispatch("auth/logout");
            console.log("401");
            throw error;
          } else {
            if (error.response.status === 406) {
              myToast.error(error.response.data.message);
            }
          }
        }
        this.i = 0;
        throw error;
      },
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._40i1nterceptor);
  },
}


export default ApiService;