import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const _baseUrl = 'http://localhost:8080';

export default new Vuex.Store({
  state: {
    // access: false,
    processing: false,
    error: null,
    message: null,
    user: null,
    token: localStorage.getItem('token'),
  },
  getters: {
    processing: (state) => state.processing,
    error: (state) => state.error,
    message: (state) => state.message,
    user: (state) => state.user,
  },
  mutations: {
    setSrocessing(state, param) {
      state.processing = param
    },
    setError(state, error) {
      state.error = error
    },
    setMessage(state, message) {
      state.message = message
    },
    cleanError(state) {
      state.error = null
    },
    getUser(state, data) {
      state.user = data
    }
  },
  actions: {
    autorisation({commit}) {
      fetch(`${_baseUrl}/about/`, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${toket}`,
        }
      }).then((res) => {
        return res.json();
      }).then(({data}) => {
        commit('getUser', data)
      }).catch(() => {
        
      })
    },
    registration({commit}, data) {
      commit('setSrocessing', true)
      fetch(`${_baseUrl}/register/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      }).then((res) => {
        return res.json();
      }).then(({erorr, message}) => {
        if (error) {
          commit('setError', error)
        } else {
          commit('setMessage', message)
        }
        commit('setSrocessing', false)
      }).catch(() => {
        commit('setError', "Не удалось получиь доступ к системе, попробуйте позже")
        commit('setSrocessing', false)
      })
    },
    getUser({commit}) {
      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
      // let data = {
      //   "username": "test",
      //   "password": "123"
      // }

      // Axios.post('http://localhost:8080/register/', data)
      //   .then(res => {
      //     console.log("res", res)
      //   }) 
      //   .catch(err => console.log("err", err))


      // login
      // register 
      // about

      let toket = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNTY4MDgyMTYzLCJleHAiOjE1NjgyMTE3NjN9.mroZkj2qRZw4xn70M0nss5oTd8h0YTCai2-Tj7u9p7E"
      // toket = null;
      fetch(`${_baseUrl}/about/`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${toket}`,
        },
        // body: JSON.stringify(data)
        }).then((res) => {
          console.log("res", res)
          return res.json();
        }).then(body => {
          console.log("body", body)
        }).catch(() => console.log("catch", error))










    }, 
    login({commit}, data) {
      commit('setSrocessing', true)
      fetch(`${_baseUrl}/login/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      }).then((res) => {
        return res.json();
      }).then(({erorr, token}) => {
        if (error) {
          commit('setError', error)
        } else {
          localStorage.setItem('token', token)
        }
        commit('setSrocessing', false)
      }).catch(() => {
        commit('setError', "Не удалось войти в систему, попробуйте позже")
        commit('setSrocessing', false)
      })



      // localStorage.setItem('token', 'dfjh34hk3j4k234g34jh3g4jhk3jh32kj4h')
      // console.log(localStorage.getItem('token'))
    }
  }
})
