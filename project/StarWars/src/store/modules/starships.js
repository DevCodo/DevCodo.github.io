import swapiService from '../../services/swapiService';

const { getAllStarships, getStarship, getStarshipImage } = swapiService;

export default {
  namespaced: true,

  state: {
    allStarships: null,
    starship: null,
    starshipImage: null,
    starshipDetails: null
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
    starshipDetails(state) {
      return state.starshipDetails
    } 
  },

  mutations: {
    getAllStarships(state, data) {
      state.allStarships = data;
    },
    getStarship(state, data) {
      state.starship = data;
    },
    removeAllStarships(state) {
      state.allStarships = null;
    },
    removeStarship(state) {
      state.starship = null;
    },
    getStarshipImage(state, id) {
      state.starshipImage = getStarshipImage(id);
    },
    removStarshipImage(state) {
      state.starshipImage = null;
    },
    getStarshipDetails(state, data) {
      state.starshipDetails = data;
    },
    removeStarshipDetails(state) {
      state.starshipDetails = null;
    },
  },

  actions: {
    getAllStarships({commit}, page) {
      commit('removeAllStarships');
      commit('removeStarship');
      commit('removStarshipImage');
      getAllStarships(page)
      .then(data => {
        commit('getAllStarships', data);
        commit('getStarship', data[0]);
        commit('getStarshipImage', data[0].id);
      })
      .catch(err => {
        commit('getAllStarships', false);
        commit('getStarship', false);
      })
    },
    getStarship({commit, state}, id) {
      let data = state.allStarships.filter(item => item.id == id);
      commit('getStarship', data[0]);
      commit('removStarshipImage');
      setTimeout(() => {
        commit('getStarshipImage', id);
      }, 0);
    },
    getStarshipDetails({commit}, id) {
      commit('removeStarshipDetails');
      getStarship(id)
        .then(data => {
          data.url = getStarshipImage(id);
          commit('getStarshipDetails', data);
        })
        .catch(err => commit('getStarshipDetails', false))
    },
  }
}