import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import Home from './views/Home.vue'
import People from './views/People.vue'
import Planets from './views/Planets.vue'
import Starships from './views/Starships.vue'
import Details from './views/Details.vue'
import E404 from './views/E404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        store.dispatch('game/getCards', 4);
        next()
      }
    },
    {
      path: '/people',
      name: 'people',
      component: People,
    },
    {
      path: '/people/:id',
      name: 'person',
      component: Details,
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets,
    },
    {
      path: '/planets/:id',
      name: 'planet',
      component: Details,
    },
    {
      path: '/starships',
      name: 'starships',
      component: Starships,
    },
    {
      path: '/starships/:id',
      name: 'starship',
      component: Details,
    },
    {
      path: '*',
      component: E404
    },
  ]
})
