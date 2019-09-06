import swapiService from '../../services/swapiService';

const { getAllPlanets, getPlanet, getPlanetImage } = swapiService;

export default {
  namespaced: true,

  state: {
    allPlanets: null,
    planet: undefined,
    randomPlanet: null,
    planetImage: null,
    randomPlanetImage: null,
  },

  getters: {
    allPlanets(state) {
      return state.allPlanets;
    },
    planet(state) {
      return state.planet;
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
    getRandomPlanet(state, data) {
      state.randomPlanet = data;
    },
    getPlanetImage(state, id) {
      state.planetImage = getPlanetImage(id);
    },
    getRandomPlanetImage(state, id) {
      state.randomPlanetImage = getPlanetImage(id);
    },
    removePlanet(state) {
      state.planet = null;
    },
  },

  actions: {
    getAllPlanets(store) {
      getAllPlanets()
      .then(data => {
        store.commit('getAllPlanets', data);
      })
      .catch(err => store.commit('getAllPlanets', false))
    },
    getPlanet(store, id) {
      store.commit('removePlanet');
      getPlanet(id)
        .then(data => {
          store.commit('getPlanet', data);
          store.commit('getPlanetImage', id);
        })
        .catch(err => store.commit('getPlanet', false))
    },
    getRandomPlanet(store, id) {
      getPlanet(id)
        .then(data => {
          store.commit('getRandomPlanet', data);
          store.commit('getRandomPlanetImage', id);
        })
        .catch(err => store.commit('getRandomPlanet', false))
    },
  }
}