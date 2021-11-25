import Api from "./api";

export default {
    index (search) {
        return Api().get(`categories`, {
            params: {
                search: search
            }
        })
    },

    post (category) {
        return Api().post(`category`,category)
    },

    show(categoryId) {
        return Api().get(`categories/${categoryId}`)
    },

    put(category,categoryId) {
        return Api().put(`categories/${categoryId}`,category)
    }
}