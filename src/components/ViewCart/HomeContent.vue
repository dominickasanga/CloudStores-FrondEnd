<template>
  <v-layout mt-4>
    <v-flex xs4>
      <categories-list/>
    </v-flex>
    <v-flex xs12>
      <cart/>
      <br>
      <categories/>
    </v-flex>
  </v-layout>
</template>

<script>
import cart from '../Common/cart.vue'
import CategoriesList from '../Common/CategoriesList.vue'
import categories from '../Common/Catagories.vue'
import {mapState} from 'vuex'
import Cart from '../Common/cart.vue'
export default {
  components: {
    cart,
    CategoriesList,
    categories,
    Cart
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
