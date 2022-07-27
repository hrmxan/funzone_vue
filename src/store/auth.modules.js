import { UserService } from "../services/user.service";
import { TokenService } from "../services/store.service";
import router from "../router";

const state = {
    user: {
      permissions: [],
    },
    show401Error: false,
    userName: TokenService.getUserName(),
    token: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: "",
};

const getters = {
    loggedIn: (state) => {
      return !!state.token;
    },
  
    authenticationErrorCode: (state) => {
      return state.authenticationErrorCode;
    },
  
    authenticationError: (state) => {
      return state.authenticationError;
    },
  
    userPermissions: (state) => {
      return state.user.permissions;
    },
    isAuthenticated() {
      return true;
    },
};

const actions = {
    async login({ commit }, userData) {
      commit("loginRequest");
      try {
        const user = await UserService.login(userData);
        await commit("loginSuccess", user);
        return true;
      } catch (e) {
        commit("loginError", { errorCode: e.errorCode, errorMessage: e.message });
        return false;
      }
    },
  
    async loginByToken({ commit }, userData) {
      commit("loginRequest");
      try {
        const user = await UserService.loginByEsp(userData);
        await commit("loginSuccess", user);
        // let routeHistory = router.history.current.query.redirect;
        // router.push(
        //   routeHistory && routeHistory != "/login" ? routeHistory : "/"
        // );
        return true;
      } catch (e) {
        commit("loginError", { errorCode: e.errorCode, errorMessage: e.message });
        return false;
      }
    },
  
    logout({ commit }) {
      UserService.logout();
      commit("logoutSuccess");
      router.push("/login").catch(() => {});
    },
};

const mutations = {
    show401ErorMessage(state, boolean) {
      state.show401Error = boolean;
    },
    loginRequest(state) {
      state.authenticating = true;
      state.authenticationError = "";
      state.authenticationErrorCode = 0;
    },
    loginSuccess(state, user) {
      state.user = user;
      state.userId = user.id;
      state.token = user.token;
      state.authenticating = false;
      state.userName = TokenService.getUserName();
    },
  
    loginError(state, { errorCode, errorMessage }) {
      state.authenticating = false;
      state.authenticationErrorCode = errorCode;
      state.authenticationError = errorMessage;
    },
  
    logoutSuccess(state) {
      state.token = "";
      state.rules = [];
      state.userId = null;
    },
};

export const auth = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};