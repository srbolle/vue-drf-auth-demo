import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListUsers from '@/components/listUsers'
import ShowJWT from '@/components/showJWT'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/original',
      name: 'Original',
      component: HelloWorld
    },
    {
      path: '/jwt',
      name: 'ShowJWT',
      component: ShowJWT
    },
    {
      path: '/users',
      name: 'ListUsers',
      component: ListUsers
    }
  ]
})
