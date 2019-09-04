export default {
  namespaced: true,

  state: {
    items: [
      {
        url: {name: 'products'},
        text: 'Products List'
      },
      {
        url: {name: 'cart'},
        text: 'Your Cart'
      },
      {
        url: {name: 'checkout'},
        text: 'Order Now'
      },
    ]
  },

  getters: {
    items(state) {
      return state.items;
    }
  },

  mutations: {

  },

  actions: {

  }
}