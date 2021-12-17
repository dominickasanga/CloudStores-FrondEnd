<template>
  <v-layout>
    <v-flex>
         <div class="browse">

           <v-layout>
             <nav-link-category-item/>
           </v-layout>

            <v-layout>    
            <v-row>
                
                <div
                v-for="item in items"
                class="item"
                @click="loadProduct(item.item.id, item.item.name, item.item.categoryId)"
                :key="item.item.id">
                
                <v-col>
                  <v-flex>
                  <div>
                    <img class="item-image" :src="item.item.productImageUrl"/>
                     
                    <div class="item-name">
                    {{item.item.name}} 
                    </div>
                  </div>
                  </v-flex>
                </v-col>
                
                </div>
             
                </v-row>
           </v-layout>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import ItemsService from '../../services/ItemsService'
import BooKmarkService from '../../services/BookmarkService'
import NavLinkCategoryItem from './NavLinkCategoryItem.vue'
export default {
    components: {
      NavLinkCategoryItem
    },
    data() {
        return {
            item: null,
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
        // if (!this.isUserLoggedIn) {
        //   return
        // }
        this.item = this.bookmark = (await BooKmarkService.index({
          userId: this.$store.state.user.id
        })).data
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
    width: 90%;
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
</style>