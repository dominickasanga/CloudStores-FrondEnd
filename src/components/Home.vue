<template>
  <v-layout>
    

    <v-flex>
      <search/>
      <v-flex>
            <v-flex xs3>
      <categories-list/>
    </v-flex>
    <v-flex xs7 offset-xs2 class="ml-2">
      <products/>
      <br>
      <catagories/>
    </v-flex>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import Products from './Products.vue'
import Search from './SearchProducts.vue'
import Catagories from './Common/Catagories.vue'
import CategoriesList from './Common/CategoriesList.vue'
export default {
  components: {
    Products,
    Search,
    Catagories,
    CategoriesList
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
