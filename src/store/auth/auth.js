import axios from "axios";


axios.interceptors.request.use(function (config) {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    return config;
}, function (error) {
    return Promise.reject(error);
});






export default {
    actions: {
        async updateToken(ctx, user) {
            ctx.commit("setLoading", true);
            await axios.post("/v1/user/login", {
                email: user.email,
                password: user.password
            })
            .then(response => {
                ctx.commit("updateUser", response);
            })
            .catch(error => {
                ctx.commit('setError',error);
            })
            .finally(() => {
                ctx.commit("setLoading", false);
            });
        },
        async getUserInfo(ctx) {
            ctx.commit("setLoading", true);
            await axios.get("/v1/user/get-me")
            .then(res => {
                ctx.commit("updateUser", res);
            })
            .finally(() => {
                ctx.commit("setLoading", false);
            });
        },
        async userRegister(ctx, user) {
            ctx.commit("setLoading", true);
            await axios.post("/v1/user/register",{
                email: user.email,
                password: user.password,
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                birthday: user.date,
                gender: user.gender
            })
            .then(res=>{
                ctx.commit("registSuccess", res);
            })
            .finally(()=>{
                ctx.commit("setLoading", false);
            });
        },
        async emailConfirm (ctx,reg) {
            ctx.commit("setLoading", true);
            await axios.post(`/v1/user/confirm-email?email=${reg.email}&code=${reg.code}`)
            .catch((error)=>{
                ctx.commit('confError',error);
            })
            .finally(()=>{
                ctx.commit("setLoading", false);
            });
        },
        async changeInfo (ctx,user) {
            await axios.post('/v1/user/update',{
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                birthday: user.birthday,
                gender: user.gender
            })
            .then(res => {
                console.log('RESPONSE',res);
                ctx.commit('updateInfo',res);
            })
            .catch(err => {
                console.log('ERROR',err);
            })
        },
        async changePassword (ctx,passwords) {
            // post data with body axios
            await axios.post('/v1/user/update-password', {
                old_password: passwords.old_password,
                new_password: passwords.new_password,
                password_confirm: passwords.password_confirm
            })
            .then(function (response) {
                console.log('PASSWORD CHANGE',response);
                ctx.commit('passwordChange',response);
            })
            .catch(function (error) {
                console.log('PASSWORD CHANGE ERROR',error);
                ctx.commit('passwordChangeError',error);
            });
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload;
        },
        updateToken(state) {
            state.error = {}
        },
        confError(state,error) {
            let errorMessage = error?.response?.data?.errors;
            state.error = errorMessage;
        },
        emailConfirm (state, res) {
            let resdata = {...res.status, ...res.data?.data};
            localStorage.setItem('token', res.data?.data?.token);
            state.regUser = resdata;
        },
        updateInfo(state, response) {
            // console.log(response);
            state.errUser = {}
            state.userUpdate = {...{status: response.status}, ...response.data?.data};
        },
        updateUser(state, response) {
            // console.log(response);
            state.errUser = {}
            state.user = {...{status: response.status}, ...response.data?.data};
            localStorage.setItem('token', state.user?.token);
            localStorage.setItem('user_email', state.user?.email);
        },
        registSuccess(state, response) {
            // console.log("Regist success",response);
            state.error = {}
            state.regUser = {...{status: response.status}, ...response.data.data};
        },
        setError (state, error) {
            let errorMessage = error?.response?.data?.errors;
            errorMessage = Object.values(errorMessage);
            state.error = errorMessage;
            localStorage.removeItem('user_email');
        },
        registError (state, error) {
            let errorMessage = error?.response?.data?.errors || '';
            state.regUser = {},
            // state.error = error.response;
            state.error = errorMessage;
            state.error = { ...state.error, ...{message: error.message} };
        },
        passwordChangeError (state, error) {
            let errorMessage = error?.response?.data?.errors || '';
            state.password = {},
            state.error = errorMessage;
        },
        passwordChange (state, response) {
            state.error = {}
            let pasObject = {...{status: response.status}, ...response.data?.data};
            localStorage.setItem('token', pasObject.token);
            state.password = pasObject;
        }
        
    },
    state: {
        isLoading: false,
        user: {
            name: '',
            email: '',
            phone: '',
        },
        userUpdate: {},
        errUser: {},
        password: {},
        regUser: {},
        userget: '',
        error: {},
        userInfo: {
            name: '',
            email: '',
            gender: ''
        },
        token: ''
    },
    getters: {
        setUser(state) {
            return state.user
        },
        getError(state) {
            // console.log("ERROR",state.error);
            return state.error
        },
        getRegUser(state) {
            return state.regUser
        },
        getChangePassword(state) {
            return state.password
        },
        getUserUpdate(state) {
            return state.userUpdate
        },
        authIsLoading(state) {
            return state.isLoading
        }
    },
}