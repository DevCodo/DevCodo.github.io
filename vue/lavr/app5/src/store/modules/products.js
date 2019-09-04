export default {
  namespaced: true,
  state: {
    items: getProducts()
  },
  getters: {
      items(state){
        return state.items
      } 
  },
  mutations: {

  },
  actions: {

  }
}

function getProducts() {
  return [
    {
      id_product: 1,
      title: "Iphone 5",
      price: 20000
    },
    {
      id_product: 2,
      title: "Iphone 6",
      price: 30000
    },
    {
      id_product: 3,
      title: "Iphone 7",
      price: 50000
    },
  ]
}