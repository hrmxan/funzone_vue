import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DisableAutocomplete from 'vue-disable-autocomplete';
import AOS from 'aos'
import Notifications from '@kyvg/vue3-notification'
import VueSweetalert2 from 'vue-sweetalert2';
import Toast from "vue-toastification";
import i18n from './core/i18/i18.js';
// Import the CSS or use your own!

// import axios from "axios";
import "vue-toastification/dist/index.css"
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import 'aos/dist/aos.css'
// import './assets/css/awesome.min.css'

// createApp(App).use(store).use(DisableAutocomplete).use(router).use(AOS.init).use(Notifications).use(VueSweetalert2).mount('#app')
import ApiService from './services/api.service'
import {
  TokenService
} from './services/store.service'

ApiService.init(process.env.VUE_APP_BASE_URL);
ApiService.mount401Interceptor();
if (TokenService.getToken()) {
  ApiService.setHeader();
  ApiService.mount401Interceptor();
}

const app = createApp(App);


app.use(store).use(DisableAutocomplete).use(router).use(AOS.init).use(Notifications).use(VueSweetalert2);
app.use(i18n);
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 30,
  newestOnTop: true
});

app.mount('#app');

export default app;