import swapiService from '../../services/swapiService';

const { getAllStarships, getStarship, getStarshipImage } = swapiService;

export default {
  namespaced: true,

  state: {
    allStarships: null,
    starship: undefined,
    starshipImage: null,
  },

  getters: {
    allStarships(state) {
      return state.allStarships;
    },
    starship(state) {
      return state.starship;
    },
    starshipImage(state) {
      return state.starshipImage;
    },
  },

  mutations: {
    getAllStarships(state, data) {
      state.allStarships = data;
    },
    getStarship(state, data) {
      state.starship = data;
    },
    getStarshipImage(state, id) {
      state.starshipImage = getStarshipImage(id);
    },
    removeStarship(state) {
      state.starship = null;
    },
  },

  actions: {
    getAllStarships(store) {
      getAllStarships()
      .then(data => {
        store.commit('getAllStarships', data);
      })
      .catch(err => store.commit('getAllStarships', false))
    },
    getStarship(store, id) {
      store.commit('removeStarship');
      getStarship(id)
        .then(data => {
          store.commit('getStarship', data);
          store.commit('getStarshipImage', id);
        })
        .catch(err => store.commit('getStarship', false))
    },
  }
}