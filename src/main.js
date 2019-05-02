import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var config = {
      apiKey: 'AIzaSyAwoXWGXnSMmLkQ7Q-4e71XfD61r_0vadQ',
      authDomain: 'fe-school.firebaseapp.com',
      databaseURL: 'https://fe-school.firebaseio.com',
      projectId: 'fe-school',
      storageBucket: 'fe-school.appspot.com',
      messagingSenderId: '642490931765'
    }
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('loggedUser', user)
      }
    })
  }
})
