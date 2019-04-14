import Vue from 'vue'
import Router from 'vue-router'
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
      component: Map
    },
    {
      path: '/stops',
      name: 'Stops',
      component: Stops
    },
    {
      path: '/routes',
      name: 'Routes',
      component: Routes
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ]
})
