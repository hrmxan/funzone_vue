import axios from "axios";


axios.interceptors.request.use(function (config) {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default {
  actions: {
    async logIn(ctx, user) {
      ctx.commit("setLoading", true);
      await axios.post('/business/user/login',{
        email: user.email,
        password: user.password
      })
      .then(res => {
        ctx.commit('logIn', res);
      })
      .catch(err => {
        ctx.commit('logInError', err);
      })
      .finally(() => {
        ctx.commit("setLoading", false);
      });
    },
    async businessRegister(ctx, user) {
      ctx.commit("setLoading", true);
      await axios.post('/business/user/register',{
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        birthday: user.birthday,
        gender: user.gender
      })
      .then(res => {
        ctx.commit('regist', res);
      })
      .catch(err => {
        ctx.commit('registError', err);
      })
      .finally(() => {
        ctx.commit("setLoading", false);
      });
    },
    async emailConfig(ctx, user) {
      ctx.commit("setLoading", true);
      await axios.get(`/business/user/confirm-email?email=${user.email}&code=${user.code}`)
      .then(res => {
        ctx.commit('emailConfig', res);
      })
      .catch(err => {
        ctx.commit('emailConfigError', err);
      })
      .finally(() => {
        ctx.commit("setLoading", false);
      });
    },
    async getMebusiness(ctx) {
      await axios.post('/business/user/get-me')
      .then(res => {
        ctx.commit('getMebusiness', res);
      })
      .catch(err => {
        ctx.commit('getMebusinessError', err);
      })
    },
    async userBusinesChange(ctx, user) {
      ctx.commit("setLoading", true);
      await axios.post('/business/user/update',{
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        birthday: user.birthday,
        gender: user.gender
      })
      .then((res)=>{
        ctx.commit('businesUpdate',res);
      })
      .catch((err)=>{
        ctx.commit('businesUpdateError',err);
      })
      .finally(() => {
        ctx.commit("setLoading", false);
      });
    },
    async businessPassChange(ctx, user) {
      ctx.commit("setLoading", true);
      await axios.post('/business/user/update-password',{
        old_password: user.old_password,
        new_password: user.new_password,
        password_confirm: user.password_confirm
      })
      .then((res)=>{
        ctx.commit('businessPassChange',res);
      })
      .catch((err)=>{
        ctx.commit('businessPassChangeError',err);
      })
      .finally(() => {
        ctx.commit("setLoading", false);
      });
    }
  },
  
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    logIn(state, res) {
      let response = {...{status: res.status}, ...res.data.data};
      localStorage.setItem("token", response.token);
      localStorage.setItem('user_email', response.email);
      state.loginDate = response;
      console.log("login", response);
      state.loginError = {};
    },
    logInError(state, err) {
      state.loginError = {...{status: err.response.status}, ...err.response?.data?.errors};
      localStorage.removeItem("token");
      localStorage.removeItem('user_email');
      state.loginDate = {};
    },
    logOut(state) {
      localStorage.removeItem("token");
      localStorage.removeItem('email');
      localStorage.removeItem('user_email');
      state.loginDate = {};
      state.loginError = {};
    },
    regist(state, res) {
      let response = {...{status: res.status}, ...res.data.data};
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      localStorage.setItem('email', response.email);
      state.loginDate = response;
      state.registError = {};
    },
    registError(state, err) {
      state.loginError = {...{status: err.response.status}, ...err.response?.data?.errors};
      localStorage.removeItem("token");
      state.loginDate = {};
    },
    emailConfig(state, res) {
      let response = {...{status: res.status}, ...res.data.data};
      state.loginDate = response;
      state.loginError = {};
    },
    emailConfigError(state, err) {
      state.loginError = {...{status: err.response.status}, ...{message: err.response?.data?.message}};
      state.loginDate = {};
    },
    getMebusiness(state, res) {
      let response = {...{status: res.status}, ...res.data.data};
      state.loginDate = response;
      state.loginError = {};
    },
    getMebusinessError(state, err) {
      state.loginError = err;
      state.loginDate = {};
    },
    businesUpdate(state, res) {
      let response = {...{status: res.status}, ...res.data.data};
      state.loginDate = response;
    },
    businesUpdateError(state, err) {
      state.loginError = {...{status: err.response.status}, ...err.response?.data?.errors};
    },
    businessPassChange(state, res) {
      let response = {...{status: res.status}, ...res.data.data};
      state.passwordChange = response;
    },
    businessPassChangeError(state, err) {
      state.loginError = {...{status: err.response.status}, ...err.response?.data?.errors};
    }
  },
  getters: {
    getLoginDate(state) {
      return state.loginDate;
    },
    getLoginError(state) {
      return state.loginError;
    },
    getBusChangePass(state) {
      return state.passwordChange;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },
  state: {
    loginDate: {},
    loginError: {},
    passwordChange: {},
    isLoading: false
  }
}