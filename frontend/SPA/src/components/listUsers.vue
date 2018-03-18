<template>
  <div v-show="isLoggedIn()">
    <app-nav></app-nav>
    <hr/>

    <h3 class="text-center">Django Users</h3>
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
</template>

<script>
import AppNav from './AppNav'
import { getPrivateUsers } from '../../utils/users-api'
import { isLoggedIn } from '../../utils/auth'

export default {
  name: 'users',
  components: {
    AppNav
  },
  data () {
    return {
      users: '',
      user_jwt: ''
    }
  },
  methods: {
    isLoggedIn () {
      return isLoggedIn()
    },
    getPrivateUsers () {
      if (isLoggedIn()) {
        getPrivateUsers().then((privateUsers) => {
          this.users = privateUsers
        }, reason => {
          // console.log(reason) // Error
        })
      } else {
        this.users = ''
      }
    }
  },
  beforeUpdate () {
    console.log('Before update')
  },
  mounted () {
    this.getPrivateUsers()
    console.log(this.$router)

    setInterval(function () {
      this.getPrivateUsers()
    }.bind(this), 10000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
