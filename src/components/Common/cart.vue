<template>

  <v-layout>
    <v-flex offset-xs2>
    <div class="browse">

      <v-layout>    
        <v-container id="container" ref="container">
        <v-row style="margin-bottom: 4%">
          <v-col class="ctr-label">
            Your Cart
          </v-col>
          <v-col>
            <div style="float: right">
              Continue shopping
            </div>
          </v-col>
        </v-row>
        <v-row class="crt-rw-1">
          <v-col class="ctr-label-1" style="float: left">
            PRODUCT
          </v-col>
          <v-col>
            <div style="float: right">
              PRICE
            </div>
          </v-col>
          <v-col>
            <div style="float: left">
              QUANTITY
            </div>
          </v-col>
          <v-col >
            <div style="float: right">
              TOTAL
            </div>
          </v-col>
        </v-row>

        <v-row
         v-for="item in items"
          :key="item.item.id"
          style="margin-top: 4%"
        class="crt-rw-1">
          <v-col class="ctr-label-1" style="float: left">
              
              <table>
                <tr>
                  <td>
                    <img class="product-image" :src="item.item.productImageUrl"/>
                  </td>
                  <td class="item-side">
                    <div class="product-name">
                       {{item.item.name}}
                    </div>
                    <div class="btn-remove"
                    @click="remove(item.bookmarkId)"
                    >
                      remove
                    </div>
                  </td>
                </tr>
              </table>
          </v-col>
          <v-col>
            <div :id="generalPrice+item.item.id" ref="prc" style="float: right">
              K{{item.item.price}}
            </div>
          </v-col>
          <v-col>
            <div style="float: left">
              <v-row class="crt-quant">
                <v-col>
                  <div id="qtnty-decr" @click="decreamentQuantinty(generalId+item.bookmarkId)">
                    -
                  </div>
                </v-col>
                <v-col>
                  <div :id="generalId+item.bookmarkId" ref="qnt">
                    {{item.quantity}}
                  </div>
                </v-col>
                <v-col>
                  <div id="qtnty-incr" @click="increamentQuantinty(generalId+item.bookmarkId)">
                    +
                  </div>
                  
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col >
            <div :id="generalTotalId+item.item.id" ref="totalPrc" style="float: right">
              K{{item.itemTotalPrice}}
            </div>
          </v-col>
        </v-row>

        <v-row class="crt-rw-1">
          <v-col class="ctr-label-1" style="float: left">
           <v-btn
            @click="checkout()"
           >
             checkout
           </v-btn>
          </v-col>
          <v-col>
          </v-col>
          <v-col>
          </v-col>
          <v-col >
            <div style="float: right" id="total-price" ref="total-price">
              K{{total_Price}}
            </div>
          </v-col>
        </v-row>

        </v-container>
      </v-layout>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import {mapState} from 'vuex'
import ItemsService from '../../services/ItemsService'
import BooKmarkService from '../../services/BookmarkService'
import CartService from '../../services/CartService'
import PaymentService from '../../services/PaymentService'

export default {
    components: {
      
    },
    data() {
        return {
          items: null,
          isBookmarked: false,
          bookmark: null,
          generalId: "Q",
          generalTotalId: "T",
          generalPrice: "P",
          total_Price: this.$store.state.totalPrice
        }
    },
    props: [

    ],
    computed: {
      ...mapState([
        'productId',
        'totalPrice'
      ]),
    },
    watch: {
      totalPrice(val, oldVal) {
        // is triggered whenever the store state changes
        console.log('do stuff', val, oldVal);
        this.total_Price = val
      },
      productId: {
      immediate: true,
      async handler (value) {
        const itemId = value
        this.item = (await ItemsService.show(itemId)).data

        this.bookmark = (await BooKmarkService.index({
          itemId: itemId,
          userId: this.$store.state.user.id
        })).data

        if (this.bookmark.length == 0)
        this.isBookmarked = false
        else
        this.isBookmarked = true
      }
    }
    },
    async mounted() {
      await this.init()
    },
    methods: {
      async init() {
        let price = 0
        this.items = (await BooKmarkService.index({
          userId: this.$store.state.user.id
        })).data
        let tempArray = []
        for (let item of this.items) {
          tempArray.push({
            quantity: item.quantity,
            item: item.Item,
            bookmarkId: item.id,
            itemTotalPrice: parseInt(item.quantity) * parseInt(item.Item.price)
          })
          price += parseInt(item.quantity) * parseInt(item.Item.price)
        }
        this.items = tempArray
        this.$store.dispatch('setTotalPrice', price)
        this.$store.dispatch('setCartNumber', 
          await CartService.updateCartNUmber(this.$store.state.user.id)
        )
        setTimeout(()=>{
          this.removeBottomlineOnLastRow(this.$refs.container)
        }, 100)
      },
      navigateTo(route) {
          this.$router.push(route);
      },
      async unSetAsBookmarked() {
        try {
          this.bookmark = (await BooKmarkService.delete(this.bookmark[0].id)).data
          let cond = !!this.bookmark
          if(cond)
          this.$router.go(this.$router.currentRoute)
        } catch(err) {
          console.log(err)
        }
      },

      async updateQuantity(item, drecrement = false) {
        try {
          let data 
          
          if (drecrement) {
            data = (await BooKmarkService.put(item.bookmarkId, {
              quantity: item.quantity--
            }))
          } else {
            data = (await BooKmarkService.put(item.bookmarkId, {
              quantity: item.quantity++
            }))
          }

          if (data) {
            await this.init()
          }
        } catch (error) {
          console.log(error)
        }
      },

      increamentQuantinty(id) {
        let bookmarkID = id.split('Q')[1]
        for (let e of this.$refs.qnt) {
          if (e.getAttribute("id") == id) {
            let elemntQuantity = e.innerHTML
            if(elemntQuantity != 0 || elemntQuantity == 0) {
              this.items.forEach(item => {
                if (item.bookmarkId == bookmarkID) {
                  BooKmarkService.put(item.bookmarkId, {
                    quantity: item.quantity++
                  })
                  this.updateQuantity(item)
                }
              })
              elemntQuantity++
              e.innerHTML = elemntQuantity
            }
          }
        }
      },
      decreamentQuantinty(id) {
         let bookmarkID = id.split('Q')[1]
        for (let e of this.$refs.qnt) {
          if (e.getAttribute("id") == id) {
            let elemntQuantity = e.innerHTML
            if(elemntQuantity != 1) {
              this.items.forEach(item => {
                if (item.bookmarkId == bookmarkID) 
                    BooKmarkService.put(item.bookmarkId, {
                      quantity: item.quantity--
                    })
                    this.updateQuantity(item, true)
              })
              elemntQuantity--
              e.innerHTML = elemntQuantity
            }
          }
        }
      },

      removeBottomlineOnLastRow(containerElement) {
        let nodes = containerElement.childNodes
        if(nodes.length > 2) {
          let lastRow = nodes[nodes.length-1]
          lastRow.setAttribute("style","border-bottom: none; margin-top: 4%;")
        }
      },
      async remove(bookmarkId) {
        try {
          let bookmark = (await BooKmarkService.delete(bookmarkId)).data
          if(bookmark) {
            await this.init()
          }
        } catch(err) {
          console.log(err)
      }
      },
      checkout() {
        this.items.forEach(item => {
          try {
            PaymentService.post(
            {
              cart_id: 78,
              customer_id: 12,
              item_id: item.item.id,

            }
          )
          } catch (err) {
            console.log(err)
          }
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  /* padding: 20px; */
  min-height: 290px;
  min-width: 290px;
  overflow: hidden;
  float: left;
  margin-top: 8px;
  margin-right: 20px;
    /* margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px; */
  cursor: pointer;
  position: relative;
  color: rgb(82, 79, 79);
}
.product-name {
  font-size: 30px;
}

.browse {
  margin-left: 0px !important;
  text-align: left !important;
  background: #fff;
  border-radius: 25px;
}

.product-desc {
  font-size: 24;
}

.prduct-tab {
  font-size: 18px;
}

.product-image {
  width: 80px;
  margin: 0 auto;
}
.product-name {
  width:auto;
  margin: auto;
  font-size: small;
}
.product-price {
  font-size: 23px;
}

.details {
  margin-top: 20px;
}

.payment-btn {
  width: 55%!important;
  white-space: normal;
}

.btn--secondary {
  padding: 7px 15px;
  background-color: transparent;
  color: #333;
  border: 2px
 solid #333;
}

.button--unbranded {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: auto;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  text-transform: uppercase;
  min-height: 44px;
  line-height: 1.9;
  background-color: #333 !important;
  color: #fff !important;
}

.buttons--panel {
  margin-top: 10%;
}
.ctr-label {
  font-size: 20px;
}
.crt-rw-1 {
  border-bottom-color: #333;
  border-bottom:solid 1px;
}
.crt-quant {
  border-color: #333;
  border:solid 1px
}
#qtnty-incr {
  
}
.item-side {
  font-size: small;
}
.btn-remove {
  margin: auto;
  margin-top: 10%;
  font-size: small;
  cursor:pointer;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 5px;
}
</style>