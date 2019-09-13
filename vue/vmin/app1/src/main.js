import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import Input from './components/Input';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
// Vue.http.interceptors.push(request => {
//   request.headers.set("Aout", "Token" + Math.random())
// })

// export const eventEmiter = new Vue();

// Vue.directive('colored', {
//   bind(el, bindings, vnode)  {
//     const arg = bindings.arg
//     const value = bindings.value
//     el.style[arg] = value;
//     console.log(bindings)
//   },
//   unbind(el, bindings, vnode) {
//     el.style.fontSize = '14px'
//   }
// })

Vue.component('Inputs', Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
