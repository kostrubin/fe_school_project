import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import Login from '@/views/Login'
import Map from '@/views/Map'
import Stations from '@/views/Stations'
import Routes from '@/views/Routes'
import NotFound from '@/views/NotFound'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/stations',
      name: 'Stations',
      component: Stations
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
