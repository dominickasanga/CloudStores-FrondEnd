
<template>
    <v-card
    class="search-card"
    elevation="3"
    >
    <v-list-item>
        <v-list-item-content>
        <v-list-item-title 
            v-for="result in search_Results"
            :id="result.id"
            :key="result.id"
            class="search-item"
            >
            {{result}}
        </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-card>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      search_Results: [
        'dominic kasanga',
        'alinafe gausi',
        'mr p',
        'lola and the sea monster'
      ]
    }
  }
}
</script>

<style>
.search-card {
  /* width: 100%; */
  margin-top: -0.001%;
  position: absolute !important;
  z-index: 23;
  margin-left: 25%;
  width: 35.4%;
  text-align: left;
  position:fixed !important;
}
.search-item {
  cursor: pointer;
}
</style>
