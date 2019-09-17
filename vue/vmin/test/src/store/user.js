import * as fb from 'firebase';

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  getters: {
    user: (state) => state.user,
    isUserLoggedIn: (state) => state.user !== null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async registerUser({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
        commit('setLoading', false)
      } catch(error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
        commit('setLoading', false)
      } catch(error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    autoLiginUser({commit}, payload) {
      commit('setUser', new User(payload.uid))
    },
    logoutUser({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
}