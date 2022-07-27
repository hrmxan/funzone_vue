import { createStore } from 'vuex'
import zones from './zones/zones'
import auths from './auth/auth'
import { auth } from './auth.modules'
import { order } from './order/order.module'
import businessAuth from './auth/businessAuth'

export default createStore({
  modules: { 
    zones,
    auths,
    auth,
    order,
    businessAuth
  }
})
