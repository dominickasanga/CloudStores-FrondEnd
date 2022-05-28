<template>
  <v-app-bar fixed  dark  elevation="4">
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

    <v-spacer>
      <search/>
    </v-spacer>

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
  </v-app-bar>
</template>

<script>
import Search from '../components/SearchProducts.vue'
export default {
    components: {
    Search
  },
  methods: {
    navigateTo(route){
      console.log(route)
      this.$router.push(route)
    },
    logout(){
      //unset login state
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setCartNumber', 0)
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