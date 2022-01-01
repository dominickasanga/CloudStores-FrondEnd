import Vue from 'vue'
import Router from './router/index'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { sync } from 'vuex-router-sync'
import store from './storeState/store'
import Panel from './components/Common/Panel'

Vue.component('panel',Panel)

Vue.config.productionTip = false;


const router = Router;

Vue.config.productionTip = false
 
sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
