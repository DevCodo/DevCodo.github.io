import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    info: [
      {
        name: "Name",
        value: "",
        pattern: /^[a-zA-Z]{2,30}$/,
        valid: null
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{5,30}$/,
        valid: null
      },
      {
        name: "Email",
        value: "",
        pattern: /.+@.+/,
        valid: null
      },
      {
        name: "Some Field",
        value: "",
        pattern: /.+/,
        valid: null
      },
      {
        name: "Some Field 2",
        value: "",
        pattern: /.+/,
        valid: null
      },
    ],
    loadigData: true
  },

  getters: {
    data(state) {
      return state.info
    },
    getProgress(state) {
      let count = 0;
      state.info.forEach(item => {
        if (item.valid) count++
      })
      return count / state.info.length * 100
    },
    getPersonalData(state) {
      let data = {};
        state.info.forEach(item => {
        Vue.set(data, item.name, item.value)
      })
      return data;
    },
    loading(state) {
      return state.loadigData
    },

  },

  mutations: {
    changeItem(state, {value, index}) {
      state.info[index].value = value;
      state.info[index].valid = state.info[index].pattern.test(value);
    },
    changeLoading(state, param) {
      state.loadigData = param
    }

  },

  actions: {
    sendData(store) {
      store.commit('changeLoading', true)

      setTimeout(() => {
        store.commit('changeLoading', false)  
      }, 1500);
    },
  }
})
