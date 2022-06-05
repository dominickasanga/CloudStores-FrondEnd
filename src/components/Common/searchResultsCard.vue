
<template>
   <div class="search-content">
    <v-card
    class="search-card"
    elevation="3"
    v-if="showSearchResults_Card"
    >
    <v-list-item
      v-for="item in search_Results"
      :id="item.id"
      :key="item.id"
      class="search-item"
      @click="loadProduct(item.id, item.name, item.categoryId)"
     >
        <v-list-item-content>
        <v-list-item-title>
            {{item.name}}
        </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-card>
   </div>
</template>

<script>
import {mapState} from 'vuex'
import categoryService from '../../services/CategoriesService'
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      search_Results: this.$store.state.searchResults,
      showSearchResults_Card: this.$store.state.showSearchResultsCard,
      resultsEmpty: 'results empty'
    }
  },
  methods: {
    async loadProduct(productId, productName, categoryId) {
     if (productName != this.resultsEmpty) {
            this.$store.dispatch('setProductId', productId)
            let categoryName = (await categoryService.show(categoryId)).data.name
            this.$store.dispatch('setProductName', productName)
            this.$router.push({
                name: 'browse-product',
                params: {
                categoryName: categoryName,
                itemId: productId
                }});
     }
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
     if(!val.length) {
        this.$store.dispatch('setSearchResults', [{name: this.resultsEmpty}])
     }
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
  text-align: left;
  position:fixed !important;
  width: inherit;
}
.search-item {
  cursor: pointer;
}
.search-content {
  width: 33.1%;
}
</style>
