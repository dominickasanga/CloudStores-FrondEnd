<template>

  <v-layout>
    <v-flex offset-xs2>
    <div class="browse">

      <v-layout>    
        <v-container>
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
          :key="item.id"
          style="margin-top: 4%"
        class="crt-rw-1">
          <v-col class="ctr-label-1" style="float: left">
              <img class="product-image" :src="item.productImageUrl"/>
          </v-col>
          <v-col>
            <div style="float: right">
              K50000.00
            </div>
          </v-col>
          <v-col>
            <div style="float: left">
              <v-row class="crt-quant">
                <v-col>
                  -
                </v-col>
                <v-col>
                  1
                </v-col>
                <v-col>
                  +
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col >
            <div style="float: right">
              TOTAL
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
export default {
    components: {
      
    },
    data() {
        return {
            items: null,
            isBookmarked: false,
            bookmark: null
        }
    },
    props: [

    ],
    computed: {
      ...mapState([
        'productId'
      ])
    },
    watch: {
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
        console.log("here: ", )
        this.items = (await BooKmarkService.index({
          userId: this.$store.state.user.id
        })).data
        let tempArray = []
        for (let item of this.items) {
          tempArray.push(item.Item)
        }
        this.items = tempArray
    },
    methods: {
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
}

.product-desc {
  font-size: 24;
}

.prduct-tab {
  font-size: 18px;
}

.product-image {
    width: 50%;
    margin: 0 auto;
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
</style>