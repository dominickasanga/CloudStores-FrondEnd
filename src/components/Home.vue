<template>
  <v-layout>
    <v-flex xs7 offset-xs2>
      <search/>
      <br>
      <products/>
    </v-flex>
  </v-layout>
</template>

<script>
import Products from './Products.vue'
import Search from './SearchProducts.vue'
export default {
  components: {
    Products,
    Search
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
