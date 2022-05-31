<template>
  <v-layout>
    <v-flex offset-xs6>
      <div>
      <v-layout class="cate-ls">
          <ul id="example-1" ref="ul">
            <li class="site-nav__home"
            id="home_cate"
            @click="loadCatelog(null)">Home</li>
            <li v-for="category in categories"
            class="site-nav__item"
            :id="category.id"
            :class="dataFieldClass"
            @click="loadCatelog(category.id, category.name)"
            :key="category.id">
                {{ category.name }}
            </li>
            </ul> 
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import categoriesService from '../../services/CategoriesService'
export default {
  components: {
  },
  data() {
    return {
      categories: null,
      categoryId: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    loadCatelog(id, categoryName) {
      this.resetProductName()
      this.categoryId = id;
      this.$store.dispatch('setCategoryId', id)
      this.$store.dispatch('setCategoryName', categoryName)
       console.log(categoryName+' '+id)
      this.$router.push({
        name: 'browse-category',
        params: {
          categoryName: categoryName
      }}),
      //its a hack
      this.checkSelectedCategory()
    },
    checkSelectedCategory() {
        this.$refs.ul.childNodes.forEach((li) => {
         li.setAttribute("class", "site-nav__item")
         if (this.$store.state.categoryId == li.id) {
           li.setAttribute("class", "site-nav__item cate-high-light")
         }
         if (this.$store.state.categoryId == null && li.id == "home_cate") {
           li.setAttribute("class", "site-nav__item cate-high-light")
         }
       })
    },
    resetProductName() {
      this.$store.dispatch('setProductName', null)
    }
  },
  async mounted() {
    // (await categoriesService.index()).data
    this.categories = (await categoriesService.index()).data
  },
  updated() {
    this.checkSelectedCategory()
  },
  watch: {
    categoryId: {
      immediate: true,
      handler () {
        this.checkSelectedCategory()
      }
    }
  },
  computed: {
    ...mapState([
    'categoryId'
    ])
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cate-ls {
    float: left;
    padding-left: 3px;
    padding-right: 3px;
    width: 100%;
    font-weight: 400;
    color: #333;
    font-size: 17px;
    text-align: initial;
    background: aquamarine;
    border-radius: 25px;
}

li {
    list-style-type:none;
    cursor: pointer;
    padding: 12px 0;
}

li:hover {
  color: #82868b;
}

.site-nav__item {
    border-bottom: 1px solid #e8e8e8;
}

.site-nav__home {
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
}
ul {
width: 100%;
}
.cate-high-light {
  font-weight: bold;
}
.flex.offset-xs6 {
  margin-right: -43%;
}
@media (min-width: 0px) {
  .v-application--is-ltr .flex.offset-xs6 {
  margin-left: 45%;
}
}
</style>
