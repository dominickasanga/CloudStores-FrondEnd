<template>
  <div>
    <panel title="Login"  width="12">
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
      <v-btn class=" action"
      @click="login">Login</v-btn>
    </panel>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import CartService from '../services/CartService'

export default {
  components: {  },
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
        this.$store.dispatch('setCartNumber', 
          await CartService.updateCartNUmber(this.$store.state.user.id)
        )
        this.$router.push({
          name: 'root'
        })
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
.action {
  margin-left: 80%;
}
</style>
