import Api from "./api";

export default {
    index () {
        return Api().get('items')
    },

    post (item) {
        return Api().post('item',item)
    },
}