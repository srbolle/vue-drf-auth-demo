<template>
<div>
  <div id="jwt">
    <h3 class="text-center" v-bind:title="user_jwt">Show JWT</h3>
    <p><span class="badge alert-info"> JWT: </span> {{ user_jwt }} </p>
  </div>
  <div id="user-credentials">
    <button v-on:click="handleLogin">Login</button>
    <button v-on:click="handleLogout">Logout</button>
    <h5>Usercredentials:</h5>
    <input v-model="user" placeholder="Username">
    <input v-model="password" placeholder="Password">
  </div>
  <router-link to="/users">Go to Users</router-link>
  <!--
  <list-users></list-users>
  -->
</div>
</template>

<script>
import ListUsers from './listUsers'
import { login, logout, getAccessToken } from '../../utils/auth'

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  name: 'jwt_token',
  components: {
    ListUsers
  },
  methods: {
    handleLogin () {
      login(this.user, this.password)
      sleep(250).then(() => {
        this.user_jwt = getAccessToken()
        console.log('jwt: ', this.user_jwt)
      })
    },
    handleLogout () {
      logout()
    }
  },
  data () {
    return {
      user_jwt: '',
      user: '',
      password: '',
      just_testing: ' a test ',
      timer: ''
    }
  },
  created () {
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
