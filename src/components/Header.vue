<template>
  <v-toolbar fixed  dark  elevation="4">
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span">
        CloudStoresMW
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn 
        flat 
        dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items >  
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'register'})">
        Sign Up 
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn"
        flat 
        dark>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}
</style>