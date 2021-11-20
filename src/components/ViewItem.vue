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
                @click="navigateTo(
                    {
                     name: 'item-edit',
                     params: {
                         itemId: item.id
                     }
                    }
                  )">
                Edit</v-btn>
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
import ItemsService from '../services/ItemsService'
export default {
    data() {
        return {
            item: null
        }
    },
    components: {
    },
    props: [
        
    ],
    async mounted() {
        const itemId = this.$store.state.route.params.itemId
        this.item = (await ItemsService.show(itemId)).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
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