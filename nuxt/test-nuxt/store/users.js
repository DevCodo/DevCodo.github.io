
export const state= () => ({
  users: []
})

export const getters = {
  users: state => state.users,
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({commit}) {
    try {
      const users = await this.$axios.get('https://jsonplaceholder.typicode.com/users/')
      commit('setUsers', users.data)
    } catch(e) {
      throw e
    }
  },
  async fetchUserById({}, userId) {
    try {
      const user = await this.$axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      return user.data
    } catch(e) {
      throw e
    }
  },
}