import swapiService from '../../services/swapiService';

const { getAllPeople, getPerson, getPersonImage } = swapiService;

export default {
  namespaced: true,

  state: {
    allPeople: null,
    person: undefined,
    personImage: null,
  },

  getters: {
    allPeople(state) {
      return state.allPeople;
    },
    person(state) {
      return state.person;
    },
    personImage(state) {
      return state.personImage;
    },
  },

  mutations: {
    getAllPeople(state, data) {
      state.allPeople = data;
    },
    getPerson(state, data) {
      state.person = data;
    },
    getPersonImage(state, id) {
      state.personImage = getPersonImage(id);
    },
    removePesone(state) {
      state.person = null;
    },
  },

  actions: {
    getAllPeople(store) {
      getAllPeople()
      .then(data => {
        store.commit('getAllPeople', data);
      })
      .catch(err => store.commit('getAllPeople', false))
    },
    getPerson(store, id) {
      store.commit('removePesone');
      getPerson(id)
        .then(data => {
          store.commit('getPerson', data);
          store.commit('getPersonImage', id);
        })
        .catch(err => store.commit('getPerson', false))
    },
  }
}