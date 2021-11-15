import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import App from './App.vue'
import register from './components/Register'
import vuetify from '../src/plugins/vuetify';


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
  vuetify,
  render: h => h(App),
}).$mount('#app')
