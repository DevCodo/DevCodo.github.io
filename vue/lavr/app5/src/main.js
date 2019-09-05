import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';  

Vue.http = axios;

// let ax = new Vue()





// console.log(Vue.http)
// console.log(axios)
// import VueResource from 'vue-resource';

// Vue.use(VueResource);
// Vue.http.options.root = 'http://localhost/vuebackend/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
