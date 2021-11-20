import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import App from './App.vue'
import register from './components/Register'
import Login from './components/Login'
import AddItem from './components/AddItem'
import ViewItem from './components/ViewItem'
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync'
import store from './storeState/store'
import 'vuetify/dist/vuetify.min.css';

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

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addItem',
      name: 'addItem',
      component: AddItem
    },
    {
      path: '/Item/:itemId',
      name: 'item',
      component: ViewItem
    }
    
  ]
})


Vue.config.productionTip = false
 
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
