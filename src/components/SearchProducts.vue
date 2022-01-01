<template>
  <v-layout>
    <v-flex  xs9 offset-xs2 class=" search">
      

      <v-text-field
            class="search"
            prepend-icon="search"
            placeholder="Search"
            v-model="search">
      </v-text-field>

     <div class="cart">
     <v-icon>shopping_cart</v-icon>
     <div
     @click="navigateTo({name: 'view-cart'})"
     class="ct">&#160;&#160;&#160;cart&#160;({{cart_number}})</div>
     </div>
          
    </v-flex>
  </v-layout>
</template>
<script>
import _ from 'lodash'
import BooKmarkService from '../services/BookmarkService'
export default {
  components: {
  },
  data() {
    return {
      search: '',
      cart_number: 0
    }
  },
  methods: {
    async findCartProducts() {
      const items = this.bookmark = (await BooKmarkService.index({
          userId: this.$store.state.user.id
        })).data
      this.cart_number = items.length
      console.log("BAkhungu: ", items)
    },
    navigateTo(route){
      this.$router.push(route)
    },
  },
  async mounted() {
    this.findCartProducts()
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
</style>
