import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import App from './App.vue'
import register from './components/Register'
import Vuetify from 'vuetify';
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
      component: HelloWorld
    },
    {
      path: '/register',
      component: register
    },
    
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
