<template>
  <v-layout>
    <v-flex  xs9 offset-xs2 class=" search">
      <v-text-field
        class="search"
        append-icon="search"
        label="Search"
        solo
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
    </v-flex>
  </v-layout>
</template>
<script>
import _ from 'lodash'

export default {
  components: {
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
  },
  watch: {
    search: _.debounce(async function (value) {
      let currentRoute = this.$route.name

      // console.log('currentRoute: ', currentRoute)

      // if (currentRoute == 'browse-product') {
      //   currentRoute = 'root'
      // }
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
      handler (value) {
        this.search = value
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
