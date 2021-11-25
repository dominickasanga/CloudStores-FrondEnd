<template>
  <v-layout>
    <v-flex>
      <div>

          <v-layout>
              <div class="cate-msg">Featured collection</div>
          </v-layout>

          <v-layout>    
            <v-row>
                
                
                <div
                v-for="item in items"
                class="item"
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
import itemsService from '../../services/ItemsService'
export default {
  components: {
  },
  data() {
    return {
      items: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    // (await itemsService.index()).data
    this.items = (await itemsService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.items = (await itemsService.index(value)).data
      }
    }
  }
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
  background-color: rgb(31, 30, 30);
  position: relative;
  text-align: center;
  color: rgb(207, 34, 34);
  
}
.item-image {
    width: 80%;
    margin: 0 auto;

    width: 100%;
    height: 102%;

}
</style>
