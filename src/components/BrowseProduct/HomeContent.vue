<template>
  <v-layout mt-4>
    <v-flex xs4>
      <categories-list/>
    </v-flex>
   <v-flex xs12>
      <view-product/>
      <br>
      <categories/>
    </v-flex>
  </v-layout>
</template>

<script>
import CategoriesList from '../Common/CategoriesList.vue'
import categories from '../Common/Catagories.vue'
import ViewProduct from '../Common/ViewProduct.vue'
import {mapState} from 'vuex'
export default {
  components: {
    CategoriesList,
    categories,
    ViewProduct
  },
  data() {
    return {
      showProduct: false
    }
  },
  watch: {
    productId: {
      immediate: true,
      async handler () {
        this.showProduct = true
      }
    }
  },
  computed: {
    ...mapState([
    'productId'
    ])
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
