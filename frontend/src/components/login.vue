<template>
<div>
  <hr/>
  <div id="login" v-show="!isLoggedIn()">
    <h5>Enter user login information:</h5>
    <input v-model="user" placeholder="Username">
    <input v-model="password" placeholder="Password">
    <button v-on:click="handleLogin">Login</button>
  </div>
  <div id="logout" v-show="isLoggedIn()">
    <button v-on:click="handleLogout">Logout</button>
  </div>
  <p>This text comes from the component login.vue.</p>
  <hr/>
</div>
</template>


<script>
import { login, logout, isLoggedIn } from '../../utils/auth'

export default {
  name: 'UserLogin',
  components: {
  },
  methods: {
    handleLogin () {
      login(this.user, this.password)
      isLoggedIn()
      // TODO: read https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page
      this.$router.push({ name: 'ListUsers' })
    },

    handleLogout () {
      logout()
      this.$router.push('/')
    },

    isLoggedIn () {
      console.log('isLoggedIn: ', isLoggedIn())
      return isLoggedIn()
    }

  },
  data () {
    return {
      user: '',
      password: ''
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
  },
  updated () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
