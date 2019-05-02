import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Login from '@/views/Login'
import Reg from '@/views/Reg'
import Map from '@/views/Map'
import Stops from '@/views/Stops'
import Routes from '@/views/Routes'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next() : next('/')
      }
    },
    {
      path: '/stops',
      name: 'Stops',
      component: Stops,
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next() : next('/')
      }
    },
    {
      path: '/routes',
      name: 'Routes',
      component: Routes,
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next() : next('/')
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ]
})
