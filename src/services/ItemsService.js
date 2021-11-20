import Api from "./api";

export default {
    index () {
        return Api().get(`items`)
    },

    post (item) {
        return Api().post(`item`,item)
    },

    show(itemId) {
        return Api().get(`items/${itemId}`)
    },

    put(item,itemId) {
        return Api().put(`items/${itemId}`,item)
    }
}