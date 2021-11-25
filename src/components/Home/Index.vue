<template>
  <v-layout>
    <v-flex>
      <search/>
      <v-flex xs9 offset-xs1>
      <home-content/>
    </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from '../SearchProducts.vue'
import HomeContent from './HomeContent.vue'
export default {
  components: {
    Search,
    HomeContent
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
