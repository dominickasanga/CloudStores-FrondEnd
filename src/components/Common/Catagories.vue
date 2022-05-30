<template>
  <v-layout>
    <v-flex offset-xs2>
      <div class="catagories-card">
          <v-layout class="cate-msg-layout">
              <div class="cate-msg">Allow your style to match your ambition!</div>
          </v-layout>
          <v-layout class="category-layout">    
            <v-row class="category-row">
                <div
                v-for="category in categories"
                class="category"
                :key="category.id">
                  <v-col>
                    <v-flex>
                    <div>
                      <img class="category-image" :src="category.categoryImageUrl"/>
                      <div class="category-name">
                        <h5> {{category.name}} </h5>
                      </div>
                    </div>
                    </v-flex>
                  </v-col>
                </div>
              </v-row>
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
  margin-right: auto;
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
.catagories-card {
  border-radius: 25px;
  background: aquamarine;
  width: fit-content;
  height: auto;
  padding-bottom: 2%;
  margin-bottom: 10%;
}
.row {
  margin: auto !important;
}
.cate-msg-layout {
  margin: auto;
  position: relative;
   width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /** Y-axis align **/
  justify-content: center; /** X-axis align **/
}
.category-layout {
  margin-left: 0.7%;
  margin-top: 0;
  margin-bottom: -25%;
  margin-bottom: 0;
  position: relative;
   width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /** Y-axis align **/
  justify-content: center; /** X-axis align **/
}
.category-row {
  margin: inherit !important;
}
</style>
