<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <div v-show="!isLoggedIn()">
        <router-link to="/">Login</router-link>
      </div>
      <div v-show="isLoggedIn()">
        <router-link to="/users">Users</router-link>
        <router-link to="/jwt">Show JWT</router-link>
      </div>
      <router-link to="/original">Help</router-link>
    </div>
    <p>This text comes from the component AppNav.vue.</p>
  </nav>
</template>

<script>
import { isLoggedIn, login, logout } from '../../utils/auth'

export default {
  name: 'app-nav',
  methods: {
    handleLogin () {
      login()
    },
    handleLogout () {
      logout()
    },
    isLoggedIn () {
      return isLoggedIn()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-right { margin-right: 0px !important}

.log {
  margin: 5px 10px 0 0;
}
</style>
