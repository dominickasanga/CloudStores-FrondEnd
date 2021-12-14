<template>
  <v-layout>
    <v-flex>
      <div>

          <v-layout>
              <div class="cate-msg">
                Home
                <span class="crumb">›</span>
                {{ category_name }}
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
      category_name: null
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
     }
  },
  computed: {
    ...mapState([
    'categoryName'
    ])
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cate-msg {
    margin-bottom: 12px;
}
.crumb {
  font-size: 19px;
}
</style>
