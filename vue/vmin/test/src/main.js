import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAdkfH5xEo6LjOzbyrRbzAc3uZ8ehJqjlM",
      authDomain: "atc-ads.firebaseapp.com",
      databaseURL: "https://atc-ads.firebaseio.com",
      projectId: "atc-ads",
      storageBucket: "gs://atc-ads.appspot.com/",
      messagingSenderId: "851391907393",
      appId: "1:851391907393:web:d6100c536d317e51b4e8c0"
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('autoLiginUser', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
