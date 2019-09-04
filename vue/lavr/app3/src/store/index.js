import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  
  state: {
    cnt: 0,
    price: 500,
    orderState: null,
    name: "",
    phone: ""
  },

  getters: {
    price(state) {
      return state.price
    },
    cnt(state) {
      return state.cnt
    },
    name(state) {
      return state.name
    },
    phone(state) {
      return state.phone
    },
    total(state) {
      return state.cnt * state.price
    },
    orderState(state) {
      return state.orderState
    },
  },

  mutations: {
    send(state) {
      state.orderState = "loading";
    },
    done(state) {
      state.orderState = "done";
    },
    changeCnt(state, cnt) {
      state.cnt = cnt;
    },
    setName(state, payload) {
      console.log(payload)
      state.name = payload.name;
      state.phone = payload.phone;
    },
  },

  actions: {
    sendOrder(store, payload) {
      store.commit('send');
      store.commit('setName', payload);

      setTimeout(() => {
        store.commit('done')
      }, 1000);
    }
  }
})