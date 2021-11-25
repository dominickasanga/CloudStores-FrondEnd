<template>
  <v-layout mt-4>
    <v-flex xs3>
      <categories-list/>
    </v-flex>
    <v-flex xs8 offset-xs2 class="ml-2">
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
export default {
  components: {
    FeaturedProducts,
    CategoriesList,
    categories
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
