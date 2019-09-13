import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const _baseUrl = 'http://localhost:8080';

export default new Vuex.Store({
  state: {
    processing: false,
    error: null,
    message: null,
    messageProfile: "Пользователь не авторизован",
    user: null,
    token: null,
  },
  getters: {
    processing: (state) => state.processing,
    error: (state) => state.error,
    message: (state) => state.message,
    messageProfile: (state) => state.messageProfile,
    user: (state) => state.user,
    token: (state) => state.token,
  },
  mutations: {
    setProcessing(state, param) {
      state.processing = param
    },
    setError(state, error) {
      state.error = error
    },
    setMessage(state, message) {
      state.message = message
    },
    setMessageProfile(state, message) {
      state.messageProfile = message
    },
    setToken(state, token) {
      state.token = token
    },
    setUser(state, data) {
      state.user = data
    },
    cleanToken(state) {
      state.token = null
      localStorage.removeItem('token')
    },
  },
  actions: {
    autorisation({commit}, toket) {
      fetch(`${_baseUrl}/about/`, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${toket}`,
        }
      }).then((res) => {
        return res.json();
      }).then(({data, message}) => {
        if (data) {
          let user = data
          if (!user.about) user.about = "Какая-то информация"
          commit('setUser', user)
        } else {
          commit('setMessageProfile', message)
        }
      }).catch(() => {
        commit('setMessageProfile', "Не удалось получить информацию о пользователе, попробуйте позже")
      })
    },

    registration({commit}, data) {
      commit('setProcessing', true)
      fetch(`${_baseUrl}/register/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      }).then((res) => {
        return res.json();
      }).then(({error, message}) => {
        if (error) {
          commit('setError', error)
        } else {
          commit('setError', false)
          commit('setMessage', message)
        }
        commit('setProcessing', false)
      }).catch(() => {
        commit('setError', "Не удалось получиь доступ к системе, попробуйте позже")
        commit('setProcessing', false)
      })
    },

    login({commit}, data) {
      commit('setProcessing', true)
      fetch(`${_baseUrl}/login/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      }).then((res) => {
        return res.json();
      }).then(({error, token}) => {
        if (error) {
          commit('setError', error)
        } else {
          commit('setError', null)
          commit('setToken', token)
          localStorage.setItem('token', token)
        }
        commit('setProcessing', false)
      }).catch(() => {
        commit('setError', "Не удалось войти в систему, попробуйте позже")
        commit('setProcessing', false)
      })

    },
    
    logout({commit}) {
      commit('setUser', null)
      commit('cleanToken')
    }
  }
})
