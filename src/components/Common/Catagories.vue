<template>
  <v-layout>
    <v-flex>
      <div>

          <v-layout>
              <div class="cate-msg">Allow your style to match your ambition!</div>
          </v-layout>

          <v-layout>    
            
                
                
                <div
                v-for="category in categories"
                class="category"
                :key="category.id">
                
                
                  <v-flex>
                  <div>
                    <img class="category-image" :src="category.categoryImageUrl"/>

                    <div class="category-name">
                      <h5> {{category.name}} </h5>
                    </div>
                  </div>
                  </v-flex>
                
                
                </div>
             
                
           </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import categoriesService from '../../services/CategoriesService'
export default {
  components: {
  },
  data() {
    return {
      categories: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    // (await categoriesService.index()).data
    this.categories = (await categoriesService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.categories = (await categoriesService.index(value)).data
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category {
  /* padding: 20px; */
  height: 160px;
  width: 160px;
  overflow: hidden;
  float: left;
  margin-top: 8px;
  margin-right: 2%;
    /* margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px; */
  cursor: pointer;
  background-color: rgb(31, 30, 30);
  position: relative;
  text-align: center;
  color: white;
  
}
.category-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.category-desc {
  font-size: 24;
}

.prduct-tab {
  font-size: 18px;
}

.grid-item {
  float: left;
}

.category-image {
    width: 80%;
    margin: 0 auto;
    background-color: black;
    width: 100%;
    height: 102%;
    left: 0%;
    top: 0%;
    z-index: 999;
    opacity: 0.85;
}

.category:hover{
    background-color: rgb(70, 69, 69);
    opacity: .25;
    color: white;
}
.cate-msg {
    font-size: 1.53333em;
}
</style>
