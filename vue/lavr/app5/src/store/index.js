import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './modules/cart';
import menu from './modules/menu';
import products from './modules/products';

export default new Vuex.Store({
  modules: {
    menu,
    products,
    cart, 
  }
})
