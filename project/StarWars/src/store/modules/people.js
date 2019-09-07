import swapiService from '../../services/swapiService';

const { getAllPeople, getPerson, getPersonImage } = swapiService;

export default {
  namespaced: true,

  state: {
    allPeople: null,
    person: null,
    personImage: null,
    personDetails: null,
    fullPath: null
  },

  getters: {
    allPeople(state) {
      return state.allPeople;
    },
    person(state) {
      return state.person;
    },
    personDetails(state) {
      return state.personDetails;
    },
    personImage(state) {
      return state.personImage;
    },
    fullPath(state) {
      return state.fullPath;
    },
  },

  mutations: {
    getAllPeople(state, data) {
      state.allPeople = data;
    },
    getPerson(state, data) {
      state.person = data;
    },
    removeAllPeople(state) {
      state.allPeople = null;
    },
    removePerson(state) {
      state.person = null;
    },
    getPersonImage(state, id) {
      state.personImage = getPersonImage(id);
    },
    removePersonImage(state) {
      state.personImage = null;
    },
    getPersonDetails(state, data) {
      state.personDetails = data;
    },
    removePersonDetails(state) {
      state.personDetails = null;
    },
    setFullPath(state, path) {
      state.fullPath = path;
    },
  },

  actions: {
    getAllPeople({commit}, page) {
      commit('removeAllPeople');
      commit('removePerson');
      commit('removePersonImage');
      getAllPeople(page)
      .then(data => {
        commit('getAllPeople', data);
        commit('getPerson', data[0]);
        commit('getPersonImage', data[0].id);
      })
      .catch(err => {
        commit('getAllPeople', false)
        commit('getPerson', false)
      })
    },
    getPerson({commit, state}, id) {
      let data = state.allPeople.filter(item => item.id == id);
      commit('getPerson', data[0]);
      commit('removePersonImage');
      setTimeout(() => {
        commit('getPersonImage', id);
      }, 0);
    },
    getPersonDetails({commit}, id) {
      commit('removePersonDetails');
      getPerson(id)
        .then(data => {
          data.url = getPersonImage(id);
          commit('getPersonDetails', data);
        })
        .catch(err => commit('getPersonDetails', false))
    },
  }
}