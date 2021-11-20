<template>
  <v-layout>
    <v-flex>
      <panel title="Products">
         <v-btn
            slot="action"
            @click="navigateTo({name: 'addItem'})"
            class="cyan accent-2"
            light
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>

         <div
          v-for="item in items"
          class="product"
          :key="item.id">
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
              @click="navigateTo({
                name: 'item',
                params: {
                  itemId: item.id
                  }
                })">
              View Product
              </v-btn>
             </v-flex>

             <v-flex xs5>
               <img class="product-image" :src="item.productImageUrl"/>
             </v-flex>
           </v-layout>
      </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import itemsService from '../services/ItemsService'
export default {
  components: {
  },
  data() {
    return {
      items: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    // (await itemsService.index()).data
    this.items = (await itemsService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.items = (await itemsService.index(value)).data
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
