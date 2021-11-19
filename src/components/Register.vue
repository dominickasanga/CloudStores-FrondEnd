<template>
  <div>
        <panel title="Register" >
          <form>
          <div class="">
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
            <br>
            <div class="error1" v-html="error"/>
            <br>
            <v-btn class="cyan"
            @click="register">Register</v-btn>
          </div>
          </form>
        </panel>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import panel from '../components/Panel.vue'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error1 {
  color: red;
}
</style>
