import  ApiService  from "../api.service";

export default {
    checkPrice(zone) {
        return ApiService.post(`/v1/zone/${zone.zone_id}/spaces/${zone.space_id}/check-price`, {
            start_at: zone.start_at,
            end_at: zone.end_at
        });
    }
}