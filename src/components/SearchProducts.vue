<template>
  <v-layout>
    <v-flex>
      <panel title="Search">
         <v-text-field
            label="Find"
            v-model="search"/>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
  },
  async mounted() {
  },
  watch: {
    search(value) {
      const route = {
        name: 'root'
      }
      if(this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
      console.log(value)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
