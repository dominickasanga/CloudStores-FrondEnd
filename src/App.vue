<template>
  <div id="app">
    <page-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '../src/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.danger-alert {
  color: red;
}
</style>
