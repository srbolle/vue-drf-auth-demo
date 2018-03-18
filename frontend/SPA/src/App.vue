<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
    <router-link to="/">Login</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/original">Help</router-link>
    </p>
    <router-view/>
    <hr/>
    <p>This text comes from the main App.vue-file.</p>
  </div>
</template>

<script>
import UserLogin from './components/login'

export default {
  name: 'app',
  components: {
    UserLogin
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
}
</style>
