import Vue from 'vue'
import Router from './router/index'
import App from './App.vue'
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync'
import store from './storeState/store'
import 'vuetify/dist/vuetify.min.css';
import Panel from './components/Common/Panel'

Vue.component('panel',Panel)

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#4285F4',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#ff4444',
    info: '#33b5e5',
    success: '#00C851',
    warning: '#ffbb33'
  }
});

const router = Router;

Vue.config.productionTip = false
 
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
