<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Home" />
    </v-flex>
  </v-layout>
</template>

<script>
import panel from './Panel.vue'
export default {
  components: {
    panel
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
