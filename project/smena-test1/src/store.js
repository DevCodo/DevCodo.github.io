import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access: false,
    error: null,
    user: null,
    message: null
  },
  getters: {
    access: (state) => state.access,
    error: (state) => state.error,
  },
  mutations: {
    logout(state) {
      state.access = false
    },
    login(state) {
      state.access = true
    },
    cleanError(state) {
      state.error = null
    }
  },
  actions: {
    autorisation({commit}, data) {

    },
    registration({commit}, data) {
      // fetch('http://localhost:8080')
      // .
    },
    getUser({commit}) {
      let data = {
        username: "Ivan",
        password: "dfsd"
      }
      var headers = {
        "mode": 'no-cors',
    }
      Axios.post('http://localhost:8080/register/', headers, data
      )
        .then(res => {
          console.log(232323)
          console.log(res)
        })
      // fetch('/register/', {
      //   method: 'post',
      //   // mode: 'no-cors',
      //   body: JSON.stringify(data)
      //   }).then((res) => {
      //     console.log(res)
      //     return res.json();
      //   }).then(body => {
      //     console.log(body)
      //   })
    }, 
    login({commit}) {
      commit('login')
      localStorage.setItem('token', 'dfjh34hk3j4k234g34jh3g4jhk3jh32kj4h')
      console.log(localStorage.getItem('token'))
    }
  }
})
