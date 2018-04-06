<template>
<div>
  <div class="loading" v-if="loading">
    Loading...
  </div>

  <div v-if="error" class="test_error">
    <p>
    Error!!!
    </p>
    {{ error }}
  </div>

  <div class="jwt">
    <h3 class="text-center" v-bind:title="user_jwt">Show JWT</h3>
    <p><span class="badge alert-info"> JWT: </span> {{ user_jwt }} </p>
  </div>
</div>
</template>

<script>
import { getAccessToken } from '../../utils/auth'

export default {
  name: 'jwt_token',
  components: {
  },
  data () {
    return {
      loading: false,
      user_jwt: null,
      error: null
    }
  },
  methods: {
    getToken () {
      this.user_jwt = getAccessToken()
    }

  },
  watch: {
    // call again the method if the route changes
    '$route': 'getToken'
  },
  created () {
    this.getToken()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
