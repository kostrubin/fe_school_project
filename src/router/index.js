import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
// eslint-disable-next-line import/no-duplicates
import * as Vue2Leaflet from 'vue2-leaflet'
// eslint-disable-next-line import/no-duplicates
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Login from '@/components/Login'
import Map from '@/components/Map'
import Stations from '@/components/Stations'
import Routes from '@/components/Routes'
import NotFound from '@/components/NotFound'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.use(Vue2Leaflet)

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

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
