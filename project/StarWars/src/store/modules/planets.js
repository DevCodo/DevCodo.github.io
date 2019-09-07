import swapiService from '../../services/swapiService';

const { getAllPlanets, getPlanet, getPlanetImage } = swapiService;

export default {
  namespaced: true,

  state: {
    allPlanets: null,
    planet: null,
    randomPlanet: null,
    planetImage: null,
    randomPlanetImage: null,
    planetDetails: null
  },

  getters: {
    allPlanets(state) {
      return state.allPlanets;
    },
    planet(state) {
      return state.planet;
    },
    planetDetails(state) {
      return state.planetDetails
    },  
    randomPlanet(state) {
      return state.randomPlanet;
    },
    planetImage(state) {
      return state.planetImage;
    },
    randomPlanetImage(state) {
      return state.randomPlanetImage;
    },
  },

  mutations: {
    getAllPlanets(state, data) {
      state.allPlanets = data;
    },
    getPlanet(state, data) {
      state.planet = data;
    },
    reomveAllPlanets(state) {
      state.allPlanets = null;
    },
    reomvePlanet(state) {
      state.planet = null;
    },
    getRandomPlanet(state, data) {
      state.randomPlanet = data;
    },
    getPlanetImage(state, id) {
      state.planetImage = getPlanetImage(id);
    },
    getRandomPlanetImage(state, id) {
      state.randomPlanetImage = getPlanetImage(id);
    },
    removePlanetImage(state) {
      state.planetImage = null;
    },
    getPlanetDetails(state, data) {
      state.planetDetails = data;
    },
    removePlanetDetails(state) {
      state.planetDetails = null;
    },
  },

  actions: {
    getAllPlanets({commit}, page) {
      commit('reomveAllPlanets');
      commit('reomvePlanet');
      commit('removePlanetImage');
      getAllPlanets(page)
      .then(data => {
        commit('getAllPlanets', data);
        commit('getPlanet', data[0]);
        commit('getPlanetImage', data[0].id);
      })
      .catch(err => {
        commit('getAllPlanets', false)
        commit('getPlanet', false)
      })
    },
    getPlanet({commit, state}, id) {
      let data = state.allPlanets.filter(item => item.id == id);
      commit('getPlanet', data[0]);
      commit('removePlanetImage');
      setTimeout(() => {
        commit('getPlanetImage', id);
      }, 0);
    },
    getRandomPlanet({commit, state}, id) {
      getPlanet(id)
        .then(data => {
          commit('getRandomPlanet', data);
          commit('getRandomPlanetImage', id);
        })
        .catch(err => commit('getRandomPlanet', false))
    },
    getPlanetDetails({commit}, id) {
      commit('removePlanetDetails');
      getPlanet(id)
        .then(data => {
          data.url = getPlanetImage(id);
          commit('getPlanetDetails', data);
        })
        .catch(err => commit('getPlanetDetails', false))
    },
  }
}