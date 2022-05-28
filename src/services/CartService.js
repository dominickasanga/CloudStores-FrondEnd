import BooKmarkService from './BookmarkService'

async function updateCartNUmber(userId) {
    let cart_number
    const items = this.bookmark = (await BooKmarkService.index({
        userId: userId
      })).data
    cart_number = items.length
    console.log("BAkhungu: ", items)

    return cart_number
}

export default {updateCartNUmber}