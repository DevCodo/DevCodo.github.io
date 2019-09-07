import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import Home from './views/Home.vue'
import People from './views/People.vue'
import Planets from './views/Planets.vue'
import Starships from './views/Starships.vue'
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
        store.dispatch('game/getCards');
        next()
      }
    },
    {
      path: '/people',
      name: 'people',
      component: People,
      beforeEnter: (to, from, next) => {
        store.dispatch('people/getAllPeople');
        next()
      }
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets,
      beforeEnter: (to, from, next) => {
        store.dispatch('planets/getAllPlanets');
        next()
      }
    },
    {
      path: '/starships',
      name: 'starships',
      component: Starships,
      beforeEnter: (to, from, next) => {
        store.dispatch('starships/getAllStarships');
        next()
      }
    },
    {
      path: '*',
      component: E404
    },
  ]
})
