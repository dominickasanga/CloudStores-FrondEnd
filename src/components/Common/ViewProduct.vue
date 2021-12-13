<template>
  <v-layout>
    <v-flex>
         <div class="browse">
           <v-layout>
             <v-flex>
               <img class="product-image" :src="item.productImageUrl"/>
             </v-flex>

             <v-flex>
                <div class="product-name">
                  {{item.name}}
                </div>
                <div class="product-desc">
                  {{item.description}}
                </div>
                <div class="product-tab">
                 {{item.tab}}
               </div>
               <br>
               <v-btn class="cyan"
                :to="{
                  name: 'item-edit',
                  params () {
                    return {
                      itemId: item.id
                    }
                  }
                }">
                Edit</v-btn>

              <v-btn
              v-if="isUserLoggedIn && !isBookmarked"
              dark
              class="cyan"
              @click="setAsBookmarked">
              BooKmark
              </v-btn>

                            <v-btn
              v-if="isUserLoggedIn && isBookmarked"
              dark
              class="cyan"
              @click="unSetAsBookmarked">
              UN-BooKmark
              </v-btn>
             </v-flex>




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
        const itemId = this.$store.state.route.params.itemId
        this.item = (await ItemsService.show(itemId)).data

        this.bookmark = (await BooKmarkService.index({
          itemId: itemId,
          userId: this.$store.state.user.id
        })).data

        if (this.bookmark.length == 0)
        this.isBookmarked = false
        else
        this.isBookmarked = true
        
        //this.isBookmarked = !!this.bookmark[0].id

        console.log("booK : ", this.bookmark.length)
        console.log("STatus: ", this.isBookmarked)
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },

        async setAsBookmarked() {

          try {
            this.bookmark =  (await BooKmarkService.post({
              itemId: this.item.id,
              userId: this.$store.state.user.id
            })).data
            if (this.bookmark.length != 0)
            this.$router.go(this.$router.currentRoute)
          } catch(err) {
            console.log(err)
          }
          
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
  height: 290px;
  width: 290px;
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
  text-align: center;
  color: rgb(82, 79, 79);
}
.product-name {
  font-size: 30px;
}

.browse {
  margin-left: 0px !important;
}

.product-desc {
  font-size: 24;
}

.prduct-tab {
  font-size: 18px;
}

.product-image {
    width: 80%;
    margin: 0 auto;
}
</style>