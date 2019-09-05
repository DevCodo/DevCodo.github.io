import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
      items(state){
        return state.items
      },
      itemsMap(state) {
        let itemsMap = {}
        state.items.forEach((item, index) => {
          itemsMap[item.id] = item
        });
        return itemsMap;
      },
      item: (state, getters) => (id) => {
        return getters.itemsMap[id]
      }

  },

  mutations: {
    loadItems(state, data) {
      state.items = data
    } 
  },
  
  actions: {
    loadItems(store) {
      Vue.http.get('http://jsonplaceholder.typicode.com/photos?_limit=5')
        .then(res => res.json())
        .then(body => store.commit('loadItems', body))
        .catch(err => console.log("Такой фотки не найдено"))
    }
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

id: 1
thumbnailUrl: "https://via.placeholder.com/150/92c952"
title: "accusamus beatae ad facilis cum similique qui sunt"
url: "https://via.placeholder.com/600/92c952"