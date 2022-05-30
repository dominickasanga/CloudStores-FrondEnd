<template>
  <v-layout mt-4>
    <v-flex xs4>
      <categories-list/>
    </v-flex>
    <v-flex xs12>
      <featured-products/>
      <br>
      <categories/>
    </v-flex>
  </v-layout>
</template>

<script>
import FeaturedProducts from '../Common/FeaturedProducts.vue'
import CategoriesList from '../Common/CategoriesList.vue'
import categories from '../Common/Catagories.vue'
import {mapState} from 'vuex'
export default {
  components: {
    FeaturedProducts,
    CategoriesList,
    categories
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
.main-container {
  width: max-content;
}
</style>
