import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/components/auth'
import find from '@/components/find'
// import headerComp from '@/components/headerComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    },
    {
      path: '/find',
      name: 'find',
      component: find
    }
  ]
})
