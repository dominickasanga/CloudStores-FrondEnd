<template>
      <panel title="Home">
         <div v-for="item in items" :key="item.id">
          {{item.name}}
          {{item.descrpition}}
      </div>
      </panel>

</template>

<script>
import panel from './Panel.vue'
import itemsService from '../services/ItemsService'
export default {
  components: {
    panel
  },
  data() {
    return {
      items: null
    }
  },
  async mounted() {
    // (await itemsService.index()).data
    let response = await itemsService.index()
    this.items = response.data;
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
