

export default {
  state: {
    loading: false,
    error: null
  },
  getters: {
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
  },
  actions: {
    setLoading({commit}, payload) {
      commit('setLoading', payload)
    },
    setError({commit}, payload) {
      commit('setError', payload)
    },
    clearError({commit}) {
      commit('clearError')
    },
  },
}