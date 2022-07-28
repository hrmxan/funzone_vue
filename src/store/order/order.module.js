import OrderService from '../../services/orders.service';

const state = {
    price: 0,
};

const mutations = {
    setPrice(state, price) {
        state.price = price;
    }
};

const actions = {
    async checkPrice({ commit }, zone) {
        let res;
        try {
            res = await OrderService.checkPrice(zone);
            commit('setPrice', res);
            return true;
        } catch (err) {
            commit('setPrice', '');
        }
        return false;
    }
}

const getters = {
}

export const order = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}