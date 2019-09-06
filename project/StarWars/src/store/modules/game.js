import swapiService from '../../services/swapiService';

const { getAllPeople, getPersonImage } = swapiService;

export default {
  namespaced: true,

  state: {
    cards: null,
  },

  getters: {
    cards(state) {
      return state.cards;
    },
  },

  mutations: {
    getCards(state, data) {
      state.cards = data;
    },
  },

  actions: {
    getCards({commit, state}) {

      if (state.cards) return;

      getAllPeople()
      .then(data => {
        let arr = data.splice(0,6);
        arr = arr.map(item => {
          return {
            ...item,
            url: getPersonImage(item.id),
            flip: false,
          }
        })
        arr = [...arr, ...arr];
        commit('getCards', arr);
      })
      .catch(err => commit('getCards', false))
    },
  }
}