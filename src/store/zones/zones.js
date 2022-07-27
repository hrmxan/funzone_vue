import axios from "axios";


axios.interceptors.request.use(function (config) {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return config;
}, function (error) {
  return Promise.reject(error);
});






export default {
    actions: {
      async checkPrice(ctx, times) {
        console.log(times);
        await axios.post(`/v1/zone/${times.zone_id}/spaces/${times.space_id}/check-price`,{
          start_at: times.start_at,
          end_at: times.end_at
        })
        .then(res=>{
          // ctx.commit("updatePrice", res);
          console.log(res);
        })
        .catch(error=>{
          // ctx.commit('setError',error);
          console.log(error);
        })
      },
      async getZone (ctx, zone) {
        ctx.commit("setLoading", true);
        await axios.get(`/v1/zone/${zone.id}/spaces/${zone.spaceId}?include=zoneSpaceWorkingHours`)
        .then(response => {
          ctx.commit('setZone', response.data);
        })
        .finally(() => {
          ctx.commit("setLoading", false);
        });
      },
      async getZones(ctx) {
        ctx.commit("setLoading", true);
        await axios.get("/v1/zone/spaces?include=category,zoneSpaceWorkingHours&_l=en")
        .then(res => {
          ctx.commit("updateZones", res);
        })
        .catch(err => {
          ctx.commit("zoneSpacesError", err);
        })
        .finally(() => {
          ctx.commit("setLoading", false);
        });
      },
      async getFavorite(ctx) {
        ctx.commit("setLoading", true);
        await axios.get("/v1/user/favorite?include=category,zoneSpaceWorkingHours")
        .then(res => {
          ctx.commit("favorite", res);
        })
        .catch(err => {
          ctx.commit("favoriteError", err);
        })
        .finally(() => {
          ctx.commit("setLoading", false);
        });
      },
      async getCategory(ctx) {
        await axios.get("/v1/category/?_l=en")
        .then(res => {
          ctx.commit("updateCategory", res);
        })
        .catch(err => {
          ctx.commit("categoryError", err);
        })
      },
      async getZoneName(ctx,id) {
        await axios.get(`/v1/zone/${id}`)
        .then(res => {
          ctx.commit("updateZoneName", res);
        })
      },
      async getPersonalBooking(ctx) {
        ctx.commit("setLoading", true);
        await axios.get("/v1/user/orders?include=zoneSpace")
        .then(res => {
          ctx.commit("updatePersonalBooking", res);
        })
        .catch(err => {
          ctx.commit("personalBookingError", err);
        })
        .finally(() => {
          ctx.commit("setLoading", false);
        });
      },
      async setFafouriteSpace(ctx,space_id) {
        await axios.post('/v1/user/add-favorite', {
          zone_space_id: space_id
        })
        .then(res => {
          ctx.commit("setFavoriteSpace", res);
        })
        .catch(err => {
          ctx.commit("setFavoriteSpaceError", err);
        })
      }
    },
    mutations: {
      setLoading(state, payload) {
        state.isLoading = payload;
      },
      zoneSpaces(state, res) {
        state.zoneSpaces = res;
        state.zoneSpacesError = {};
      },
      zoneSpacesError(state, err) {
        state.zoneSpacesError = err;
        state.zoneSpaces = {};
      },
      favorite(state, res) {
        state.favorite = {
          ...{status: res.status},
          ...{data: res.data?.data}
        };
        state.favoriteError = {};
      },
      favoriteError(state, err) {
        state.favoriteError = err;
        state.favorite = {};
      },
      updateZones(state, res) {
        state.zoneSpaces = {
          ...{status: res.status},
          ...{data: res.data?.data}
        }
      },
      updateCategory(state, res) {
        state.category = {
          ...{status: res.status},
          ...{data: res.data?.data}
        }
      },
      categoryError(state, err) {
        state.categoryError = err;
        state.category = {};
      },
      setZone(state, res) {
        state.zone = {
          ...{code: res.code},
          ...res.data
        }
      },
      updateZoneName(state, res) {
        state.zoneName = res.data?.data?.name
      },
      updatePersonalBooking(state, res) {
        state.personalBooking = {
          ...{status: res.status},
          ...{data: res.data?.data}
        }
        state.personalBookingError = {};
      },
      personalBookingError(state, err) {
        state.personalBookingError = err;
        state.personalBooking = {};
      },
      setFavoriteSpace(state, res) {
        state.favoriteSpace = {
          ...{status: res.status},
          ...{data: res.data?.data},
          ...{message: res.data?.message}
        }
        console.log("res", state.favoriteSpace);
        state.favoriteSpaceError = {};
      },
      setFavoriteSpaceError(state, err) {
        console.log("err", err);
        state.favoriteSpaceError = err;
        state.favoriteSpace = {};
      },
      destroyFavoriteSpace(state) {
        state.favoriteSpace = {};
      }
    },
    state: {
      isLoading: false,
      resApi:[],
      category: {},
      zoneSpacesError: {},
      zoneSpaces: {},
      favoriteError: {},
      favorite: {},
      zone: {},
      zoneName: '',
      personalBooking: {},
      personalBookingError: {},
      favoriteSpace: {},
      favoriteSpaceError: {}
    },
    getters: {
      getfavoritedata(state){
        return state.favorite
      },
      getFavoriteError(state){
        return state.favoriteError
      },
      getzoneSpaces(state){
        return state.zoneSpaces
      },
      getZonesApi(state){
        return state.resApi
      },
      getisLoading(state){
        return state.isLoading
      },
      getzoneSpacesError(state){
        return state.zoneSpacesError
      },
      getCategoryDate(state){
        return state.category
      },
      getZoneData(state){
        return state.zone
      },
      zoneName(state){
        return state.zoneName
      },
      personalBooking(state){
        return state.personalBooking
      },
      personalBookingError(state){
        return state.personalBookingError
      },
      favoriteSpaceStatus(state){
        console.log("state", state.favoriteSpace);
        return state.favoriteSpace
      },
      favoriteSpaceError(state){
        return state.favoriteSpaceError
      }
    },
}