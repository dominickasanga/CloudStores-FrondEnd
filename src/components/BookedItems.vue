<template>
  <v-layout>
    <v-flex>
      <panel title="Booked Items">
          <v-data-table
           :headers="headers"
           :pagination.sync="pagination"
           :items="bookmarks">
           <template slot="items" scope="props">
               <td class="text-xs-right">
                   {{props.item.title}}
               </td>
                <td class="text-xs-right">
                   {{props.item.name}}
               </td>
           </template>
          </v-data-table>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import BookMarkService from '../services/BookmarkService'
import {mapState} from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      headers: [
        {
         text: 'Title',
         value: 'title'
        },
        {
         text: 'Name',
         value: 'name'
        }
      ],
      pagination: {
        sortBy: 'date',
        descending: 'true'
      },
      bookmarks: [
          {
            title: 'hello world',
            name: 'Testing'
          },
          {
            title: 'hello world',
            name: 'Testing'
          }
      ],
      items: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
      if(this.isUserLoggedIn) {
          this.bookmarks = (await BookMarkService.index({
              userId: this.$store.state.user.id
          })).data
          console.log("her:",this.bookmarks.itemId)
      }
  },
  computed: {
    ...mapState([
    'isUserLoggedIn'
    ])
   },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.product-name {
  font-size: 30px;
}

.product-desc {
  font-size: 24;
}

.prduct-tab {
  font-size: 18px;
}

.product-image {
    width: 80%;
    margin: 0 auto;
}
</style>
