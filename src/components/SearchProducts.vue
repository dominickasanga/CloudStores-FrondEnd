<template>
  <v-layout>
    <v-flex  xs8 offset-xs2 class="search">
      <div>
        <v-text-field
          class="search"
          append-icon="search"
          label="Search"
          solo
          @focus="displaySearchResultsCard"
          @blur="hideSearchResultsCard"
          v-model="search">
        </v-text-field>
        <div class="cart">
          <v-icon>shopping_cart</v-icon>
          <div
            @click="navigateTo({name: 'view-cart'})"
            class="ct">
              &#160;&#160;&#160;cart&#160;({{cart_number}})
          </div>
        </div>
      </div>
      <SearchResultsCard/>
    </v-flex>
  </v-layout>
</template>
<script>
import _ from 'lodash'
import {mapState} from 'vuex'
import ItemsService from '../services/ItemsService'
import SearchResultsCard from './Common/searchResultsCard.vue'

export default {
  components: {
    SearchResultsCard
},
  data() {
    return {
      search: '',
      cart_number: this.$store.state.cartNumber
    }
  },
  methods: {
    navigateTo(route){
      this.$router.push(route)
    },
    displaySearchResultsCard() {
      this.$store.dispatch('setShowSearchResultsCard', true)
    },
    hideSearchResultsCard() {
      setTimeout(()=> {
        this.$store.dispatch('setShowSearchResultsCard', false)
      }, 300)
    }
  },
    computed: {
    ...mapState([
    'cartNumber'
    ])
  },
  watch: {
    cartNumber(val, oldVal) {
      // is triggered whenever the store state changes
      console.log('do stuff', val, oldVal);
      this.cart_number = val
    },
    search: _.debounce(async function (value) {
      let currentRoute = this.$route.name
      const route = {
        name: currentRoute
      }
      if(this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
      console.log(value)
    }, 700),
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
        this.$store.dispatch('setSearchResults', (await ItemsService.index(value)).data)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  float: left;
  width: 66%;
  margin-left: 0.5%;
  min-height: auto !important;
  margin-top: 2.2%;
}
.cart {
  display: inline-block;
  margin-top: 2.2%;
  cursor: pointer; 
}
.ct {
  float: right;
  font-size: 18px;
}
.search-field:focus{
  /* outline:solid 10px red; */
}
.v-text-field.v-text-field--solo .v-input__control {
 min-height:0;
}
</style>
