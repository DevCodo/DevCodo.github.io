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
    getCards({commit, state}, page) {

      if (state.cards) return;
      getAllPeople(page)
      .then(data => {
        let arr = [...data, ...data];
        arr = arr.map((item, i) => {
          return {
            ...item,
            url: getPersonImage(item.id),
            flip: false,
            uniqueId: i
          }
        })
        commit('getCards', arr);
      })
      .catch(err => commit('getCards', false))
    },
  }
}