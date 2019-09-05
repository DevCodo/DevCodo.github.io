export default {
  namespaced: true,
  state: {
    products: []
  },

  getters: {
    products(state){
      return state.products
    },
    count(state) {
      return state.products.length
    }
  },

  mutations: {
    add(state, id) {
      if (state.products.indexOf(id) === -1) {
        state.products.push(id)
      }
    },
    remove(state, id) {
      let ind = state.products.indexOf(id);
      if (ind !== -1) {
        state.products.splice(ind, 1)
      }
    },
  },

  actions: {
    add(store, id) {
      store.commit('add', id)
    },
    remove(store, id) {
      store.commit('remove', id)
    },
  }
}