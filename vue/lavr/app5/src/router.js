import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './views/ProductList.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import E404 from './views/E404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: {name: 'products'}
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '*',
      component: E404
    },
  ]
})

// component: () => import('./views/About.vue')