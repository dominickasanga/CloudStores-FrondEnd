<template>
  <v-toolbar fixed  dark  elevation="4">
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        CloudStoresMW
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items >  
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      
      <v-btn 
      flat dark
      v-if="!$store.state.isUserLoggedIn"
      tag="span"
      :to="{
        name: 'register'
      }">
        Sign Up 
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route){
      console.log(route)
      this.$router.push(route)
    },
    logout(){
      //unset login state
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      //redirect
      this.$router.push({
        name: 'root'
      })
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