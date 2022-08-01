import  ApiService  from "../api.service";

export default {
    checkPrice(zone) {
        return ApiService.post(`/v1/zone/${zone.zone_id}/spaces/${zone.space_id}/check-price`, {
            start_at: zone.start_at,
            end_at: zone.end_at
        });
    },
    userOrders() {
        return ApiService.get(`/v1/user/orders?include=zoneSpace`);
    },
    createOrder(order) {
        return ApiService.post(`/v1/user/orders`, order);
        // price
        // zone_space_id
        // sale
        // start_at
        // end_at
        // people_count
    },
    view(id = '') {
        return ApiService.get(`/v1/order/${id}`);
    }
}