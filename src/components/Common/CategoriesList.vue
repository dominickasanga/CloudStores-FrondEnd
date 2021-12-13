<template>
  <v-layout>
    <v-flex>
      <div>

          <v-layout class="cate-ls">
              <ul id="example-1">
                <li class="site-nav__home"
                @click="loadCatelog(null)">Home</li>
                <li v-for="category in categories"
                class="site-nav__item"
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
      this.categoryId = id;
      this.$store.dispatch('setCategoryId', id)
      this.$router.push({
        name: 'browse-category',
        params: {
          categoryName: categoryName
      }});
    }
  },
  async mounted() {
    // (await categoriesService.index()).data
    this.categories = (await categoriesService.index()).data
  }
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
</style>
