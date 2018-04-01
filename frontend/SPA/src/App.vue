<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
    <app-nav></app-nav>
    </p>
    <router-view/>
    <hr/>
    <p>This text comes from the main App.vue-file.</p>
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  name: 'app',
  components: {
    AppNav
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
