import {http} from '../../http-common';

export default {
  namespaced: true,
  state: {
    items: [],
    item: null,
    loadingItem: true,
  },
  getters: {
      items(state){
        return state.items
      },
      // itemsMap(state) {
      //   let itemsMap = {}
      //   state.items.forEach((item, index) => {
      //     itemsMap[item.id] = item
      //   });
      //   return itemsMap;
      // },
      // item: (state, getters) => (id) => {
      //   return getters.itemsMap[id]
      // }
      item(state) {
        return state.item
      },
      loadingItem(state) {
        return state.loadingItem
      }

  },

  mutations: {
    loadItems(state, data) {
      state.items = data
    }, 
    loadItem(state, data) {
      state.item = data
    }, 
    cleanItem(state) {
      state.item = null
    },
    chengeLoadingItem(state, data) {
      if (data === true) {
        state.loadingItem = true
      } else {
        let img = document.createElement('img');
        img.src = data.thumbnailUrl;
        this.loading = false
        img.addEventListener('load', function() {
          state.loadingItem = false
        })
      }
    },
  
  },
  
  actions: {
    // loadItems(store) {
    //   Vue.http.get('http://jsonplaceholder.typicode.com/photos?_limit=5')
    //     .then(res => res.json())
    //     .then(body => store.commit('loadItems', body))
    //     .catch(err => console.log("Такой фотки не найдено"))
    // },
    // loadItem(store, id) {
    //   store.commit('cleanItem')
    //   let url = 'http://jsonplaceholder.typicode.com/photos/' + id
    //   Vue.http.get(url)
    //     .then(res => res.json())
    //     .then(body => store.commit('loadItem', body))
    //     .catch(err => console.log("Такой фотки не найдено"))
    // },
    loadItems(store) {
      http.get('photos?_limit=5')
        // .then(res => store.commit('loadItems', res))
        .then(res => store.commit('loadItems', res.data))
        .catch(err => console.log("Такой фотки не найдено"))
    },
    loadItem(store, id) {
      store.commit('cleanItem')
      store.commit('chengeLoadingItem', true)
      let url = 'photos/' + id
      http.get(url)
        .then(res => {
          store.commit('chengeLoadingItem', res.data)
          store.commit('loadItem', res.data)
        })
        .catch(err => console.log("Такой фотки не найдено"))
    },
  }
}

// function getProducts() {
//   return [
//     {
//       id_product: 1,
//       title: "Iphone 5",
//       price: 20000
//     },
//     {
//       id_product: 2,
//       title: "Iphone 6",
//       price: 30000
//     },
//     {
//       id_product: 3,
//       title: "Iphone 7",
//       price: 50000
//     },
//   ]
// }

// id: 1
// thumbnailUrl: "https://via.placeholder.com/150/92c952"
// title: "accusamus beatae ad facilis cum similique qui sunt"
// url: "https://via.placeholder.com/600/92c952"