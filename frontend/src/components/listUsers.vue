<template>
  <div>
    <hr/>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="test_error">
      <p>
      Error!!!
      </p>
      {{ error }}
    </div>

  
  <div class="listUsers"  v-show="isLoggedIn()">
    <h3 class="text-center">Django Users</h3>
    <div v-if="users" class="content">
      <div class="col-sm-4" v-for="user in users">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"> {{ user.name }} </h3>
          </div>
          <div class="panel-body">
            <p><span class="badge alert-info"> Username: </span> {{ user.username }} </p>
            <p><span class="badge alert-danger"> Is Staff: </span><strong> {{ user.is_staff }} </strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getPrivateUsers } from '../../utils/users-api'
import { isLoggedIn } from '../../utils/auth'

// Read: https://router.vuejs.org/en/advanced/data-fetching.html

export default {
  name: 'users',
  components: {
  },
  data () {
    return {
      loading: false,
      users: null,
      error: null
    }
  },
  created () {
    this.getUsers()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getPrivateUsers'
  },
  methods: {
    isLoggedIn () {
      return isLoggedIn()
    },
    getUsers () {
      console.log('listUsers: getUsers')
      this.error = this.post = null
      this.loading = true
      getPrivateUsers().then((privateUsers) => {
        console.log('listUsers: gotUsers')
        this.users = privateUsers
        this.loading = false
      }, reason => {
        console.log('listUsers: error ->>', reason)
        this.error = reason
        this.users = ''
      })
    }
  },
  beforeUpdate () {
    console.log('listUsers: before update')
  },
  mounted () {
    console.log('listUsers: mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
