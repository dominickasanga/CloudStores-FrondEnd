import Api from "./api";

export default {
    index (bookmark) {
        return Api().get(`bookmarks`, {
            params: bookmark
        })
    },

    post (bookmark) {
        return Api().post(`bookmarks`,bookmark)
    },

    delete (bookmarkId) {
        return Api().delete(`bookmarks/${bookmarkId}`)
    },

    put(bookmarkId, bookmark) {
        return Api().put(`bookmarks/${bookmarkId}`, bookmark)
    }
}