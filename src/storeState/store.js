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
        productId: null
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
        } 
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
        }
    }
})