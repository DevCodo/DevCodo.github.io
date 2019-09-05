import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './modules/cart';
import people from './modules/people';
import planets from './modules/planets';
import starships from './modules/starships';
import game from './modules/game';

export default new Vuex.Store({
  modules: {
    cart,
    people,
    planets, 
    starships,
    game, 
  }
})
