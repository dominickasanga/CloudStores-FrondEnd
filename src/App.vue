
<template>
  <div id="app">
    <v-app>
      <page-header />
      
      
        <v-container fluid>
          <router-view></router-view>
        </v-container>
    
      <client-footer/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import ClientFooter from './components/Common/ClientFooter.vue'
export default {
  name: 'app',
  components: {
    PageHeader,
    ClientFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: none;
  background: #f2f2f2 !important;
}

.danger-alert {
  color: red;
}
</style>
