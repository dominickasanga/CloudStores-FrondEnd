<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class=" pr-4 pl-4 pb-2">
            <div mm>
            <v-text-field
            type="email"
            name="email"
            v-model="email"
            placeholder="email"/>
            <br>
            <v-text-field 
            type="password"
            name="password"
            v-model="password"
            placeholder="password"/>
            </div>
            <br>
            <div class="error1" v-html="error"/>
            <br>
            <v-btn class="cyan"
            @click="login">Login</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error1 {
  color: red;
}
.mm {
  margin: 34px;
}
</style>
