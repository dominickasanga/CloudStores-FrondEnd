<template>
  <v-layout>
    <v-flex>
      <div>

          <v-layout>
            <nav-link-category-item/>
          </v-layout>
              
          <v-layout>
              <div class="cate-name">
                {{ category_name }}
              </div>

              <div class="cate-name" v-if="!category_name">
               Featured Collection
              </div>
          </v-layout>

          <v-layout>    
            <v-row>
                
                
                <div
                v-for="item in items"
                class="item"
                @click="loadProduct(item.id, item.name, item.categoryId)"
                :key="item.id">
                
                <v-col>
                  <v-flex>
                  <div>
                    <img class="item-image" :src="item.productImageUrl"/>
                     
                    <div class="item-name">
                    {{item.name}} 
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
import {mapState} from 'vuex'
import itemsService from '../../services/ItemsService'
import categoryService from '../../services/CategoriesService'
import navLinkCategoryItem from '../Common/NavLinkCategoryItem.vue'
export default {
  components: {
    navLinkCategoryItem
  },
  data() {
    return {
      items: null,
      category_name: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async loadProduct(productId, productName, categoryId) {
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
  },
  async mounted() {
    if (this.$store.state.categoryId != null) {
        let cateID = this.$store.state.categoryId;
        //this.$store.state.categoryId = null;
       this.items = (await itemsService.index(cateID)).data
    } else {
      this.items = (await itemsService.index()).data
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.items = (await itemsService.index(value)).data
      }
    },
    categoryId: {
      immediate: true,
      async handler (value) {
        this.items = (await itemsService.index(value)).data
      }
    },
    categoryName: {
       immediate: true,
       handler () {
         this.category_name = this.$store.state.categoryName
       }
     }
  },
  computed: {
    ...mapState([
    'categoryId',
    'categoryName'
    ])
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  /* padding: 20px; */
  height: 290px;
  width: 290px;
  overflow: hidden;
  float: left;
  margin-top: 8px;
  margin-right: 20px;
    /* margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px; */
  cursor: pointer;
  position: relative;
  text-align: center;
  color: rgb(82, 79, 79);
}

.cate-name {
  font-size: 28px;
  margin-bottom: 14px;
}

.item-image:hover {
   background-color: rgb(19, 18, 18);
    opacity: 0.35;
}
.item-image {
    width: 90%;
    margin: 0 auto;

    height: 102%;

}
.crumb {
  font-size: 19px;
}
</style>
