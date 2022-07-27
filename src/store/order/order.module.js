import OrderService from '../../services/order/checkPrice.service';

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
            console.log('OrderModule.checkPrice');
        } catch (err) {
            console.log('orderModule dan error qaytdi',err);
        }
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