<template>
  <v-layout>
    <v-flex xs3>
      <booked-items/>
    </v-flex>
    <v-flex xs7 offset-xs2 class="ml-2">
      <search/>
      <br>
      <products/>
      <br>
      <catagories/>
    </v-flex>
  </v-layout>
</template>

<script>
import Products from './Products.vue'
import Search from './SearchProducts.vue'
import BookedItems from './BookedItems.vue'
import Catagories from './Common/Catagories.vue'
export default {
  components: {
    Products,
    Search,
    BookedItems,
    Catagories
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
