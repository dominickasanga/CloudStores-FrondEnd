<template>
  <v-layout>
    <v-flex  xs8 offset-xs1 class="ml-9 search">
      

      <v-text-field
            class="search"
            prepend-icon="search"
            placeholder="Search"
            v-model="search">
      </v-text-field>

     <div class="cart">
     <v-icon>shopping_cart</v-icon>
     <div class="ct">&#160;&#160;&#160;cart&#160;(0)</div>
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
      search: ''
    }
  },
  methods: {
  },
  async mounted() {
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'root'
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
  width: 90%;
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
