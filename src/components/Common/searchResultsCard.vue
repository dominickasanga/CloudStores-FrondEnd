
<template>
    <v-card
    class="search-card"
    elevation="3"
    v-if="showSearchResults_Card"
    >
    <v-list-item>
        <v-list-item-content>
        <v-list-item-title 
            v-for="result in search_Results"
            :id="result.id"
            :key="result.id"
            class="search-item"
            >
            {{result.name}}
        </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-card>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      search_Results: this.$store.state.searchResults,
      showSearchResults_Card: this.$store.state.showSearchResultsCard
    }
  },
  computed: {
    ...mapState([
    'searchResults',
    'showSearchResultsCard'
    ]),
   },
  watch: {
    searchResults(val, oldVal) {
    // is triggered whenever the store state changes
    console.log('do stuff', val, oldVal);
    this.search_Results = val
    },
    showSearchResultsCard(val, oldVal) {
    // is triggered whenever the store state changes
    console.log('do stuff', val, oldVal);
    this.showSearchResults_Card = val
    },
   }
}
</script>

<style>
.search-card {
  /* width: 100%; */
  margin-top: -0.001%;
  position: absolute !important;
  z-index: 23;
  margin-left: 24.2%;
  width: 33.1%;
  text-align: left;
  position:fixed !important;
}
.search-item {
  cursor: pointer;
}
</style>
