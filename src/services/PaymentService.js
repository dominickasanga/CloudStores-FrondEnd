import Api from "./api";

export default {
    post (sale) {
        return Api().post(`sale`,sale)
    }
}