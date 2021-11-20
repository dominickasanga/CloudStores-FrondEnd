import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import AddItem from '../components/AddItem'
import ViewItem from '../components/ViewItem'
import EditProduct from '../components/EditProduct'

Vue.use(Router)

export default new Router({
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
          component: Register
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
        },
        {
          path: '/Item/:itemId/edit',
          name: 'item-edit',
          component: EditProduct
        },
        {
          path: '*',
          component: Home
        } 
      ]
})
