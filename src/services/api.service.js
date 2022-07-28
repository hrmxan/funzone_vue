import axios from "axios";
import {TokenService} from "./store.service";
import store from "@/store/index";
import bus from "../main";



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
  removeHeadder() {
    axios.defaults.headers.common['Authorization'] = null;
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
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        console.log("INTERSEPTOR ICHIDA RES", response);
        return response;
      },
      async (error) => {
        console.log("INTERSEPTOR ICHIDA ERR", error);
        this.i++;
        if (this.i == 1 && messageShow) {
          if (error.request.status === 403 || error.request.status === 401) {
            await store.dispatch("auth/logout");
            throw error;
          } else {
            if (error.request.status != 200 && error.request.status != 417) {
              if (error.response.data.message || error.response.data.details) {
                if (error.response.data.details) {
                  bus.$showMsgErrorWithDetails(
                    `${error.response.data.message}`,
                    `${error.response.data.details}`
                  );
                } else {
                  await bus.$showMsgError(`${error.response.data.message}`);
                }
              } else {
                await bus.$showMsgError(`${error.response.data.error || error.response.data}`);
              }
              throw error;
            }
          }
        }
        this.i = 0;
        // If error was not 401 just reject as is
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
  },
}

export default ApiService;