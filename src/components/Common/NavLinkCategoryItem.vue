<template>
  <v-layout>
    <v-flex>
      <div>

          <v-layout>
              <div class="cate-msg">
                Home

                <span class="crumb" v-if="category_name">›</span>
                {{ category_name }}

                <span class="crumb" v-if="product_name">›</span>
                {{ product_name }}
                </div>
          </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      category_name: null,
      product_name: null
    }
  },
  methods: {
  },
   mounted() {
  },
  watch: {
    categoryName: {
       immediate: true,
       handler () {
         this.category_name = this.$store.state.categoryName
       }
    },
    productName: {
        immediate: true,
        handler () {
            this.product_name = this.$store.state.productName
        }
    }
  },
  computed: {
    ...mapState([
    'categoryName',
    'productName'
    ])
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cate-msg {
    margin-bottom: 12px;
    margin-left: 4%;
    margin-top: 2%;
}
.crumb {
  font-size: 19px;
}
</style>
