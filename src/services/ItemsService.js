import Api from "./api";

export default {
    index (search) {
        return Api().get(`items`, {
            params: {
                search: search
            }
        })
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