import Vue from "vue";
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [
        CreatePersistedState()
    ],
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        categoryId: null,
        categoryName: null,
        productId: null,
        productName: null
    },

    mutations: {
        setToken (state, token) {
            state.token = token

            if(token){
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user) {
            state.user = user
        },
        setCategoryId (state,id) {
            state.categoryId = id
        },
        setProductId (state,id) {
            state.productId = id
        },
        setCategoryName (state,_categoryName) {
            state.categoryName = _categoryName
        },
        setProductName (state,_productName) {
            state.productName = _productName
        },
    },

    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setCategoryId ({commit},id) {
            commit('setCategoryId',id)
        },
        setProductId ({commit},id) {
            commit('setProductId',id)
        },
        setCategoryName ({commit},_categoryName) {
            commit('setCategoryName', _categoryName)
        },
        setProductName ({commit}, _productName) {
           commit('setProductName', _productName)
        },
    }
})