z<template>
  <v-layout>
    <v-flex>
      <search/>
      <slider/>
      <v-flex xs9 offset-xs1>
      <home-content/>
    </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from '../SearchProducts.vue'
import HomeContent from './HomeContent.vue'
import Slider from '../Slider.vue'
export default {
  components: {
    Search,
    HomeContent,
    Slider
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
