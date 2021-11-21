<template>
  <v-layout>
    <v-flex xs7 offset-xs2>
      <panel title="Product Details">
         <div>
           <v-layout>
             <v-flex xs5>
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
              v-if="isUserLoggedIn && !bookmark"
              dark
              class="cyan"
              @click="setAsBookmarked">
              BooKmark
              </v-btn>

                            <v-btn
              v-if="isUserLoggedIn && bookmark"
              dark
              class="cyan"
              @click="unSetAsBookmarked">
              UN-BooKmark
              </v-btn>
             </v-flex>



             <v-flex xs5>
               <img class="product-image" :src="item.productImageUrl"/>
               {{item.name}}
             </v-flex>
           </v-layout>
      </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import ItemsService from '../services/ItemsService'
import BooKmarkService from '../services/BookmarkService'
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
        'isUserLoggedIn'
      ])
    },
    async mounted() {
        // if (!this.isUserLoggedIn) {
        //   return
        // }
        const itemId = this.$store.state.route.params.itemId
        this.item = (await ItemsService.show(itemId)).data

        const bookmark = (await BooKmarkService.index({
          itemId: itemId,
          userId: this.$store.state.user.id
        })).data
        this.bookmark = bookmark
        this.isBookmarked = !!bookmark

        console.log("bookmark55: ",this.item.id)
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
          } catch(err) {
            console.log(err)
          }
          
        },

        async unSetAsBookmarked() {
          try {
            this.bookmark = await BooKmarkService.delete(this.bookmark.id)
            this.bookmark = null
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
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.product-name {
  font-size: 30px;
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