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
        productName: null,
        cartNumber: 0,
        totalPrice: 0,
        searchResults: null,
        showSearchResultsCard: false
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
        setCartNumber (state,_cartNumber) {
            state.cartNumber = _cartNumber
        },
        setTotalPrice (state, _totalPrice) {
            state.totalPrice = _totalPrice
        },
        setSearchResults (state, _searchResults) {
            state.searchResults = _searchResults
        },
        setShowSearchResultsCard (state, _showSearchResultsCard) {
            state.showSearchResultsCard = _showSearchResultsCard
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
        },
        setCategoryName ({commit},_categoryName) {
            commit('setCategoryName', _categoryName)
        },
        setProductName ({commit}, _productName) {
           commit('setProductName', _productName)
        },
        setCartNumber({commit}, _cartNumber) {
            commit('setCartNumber', _cartNumber)
        },
        setTotalPrice({commit}, _totalPrice) {
            commit('setTotalPrice', _totalPrice)
        },
        setSearchResults({commit}, _searchResults) {
            commit('setSearchResults', _searchResults)
        },
        setShowSearchResultsCard({commit}, _showSearchResultsCard) {
            commit('setShowSearchResultsCard', _showSearchResultsCard)
        }
    }
})