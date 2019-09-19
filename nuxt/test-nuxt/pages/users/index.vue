<template>
  <div>
    <h1>{{pageTitle}}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{user.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // async asyncData({store, error}) {
  //   try {
  //     await store.dispatch('users/fetchUsers')
  //     return {}
  //   } catch(e) {
  //     error(e)
  //   }
  // },
  
  // async fetch({store, error}) {
  //   try {
  //     if (store.getters['users/users'].length === 0) {
  //       await store.dispatch('users/fetchUsers')
  //     }
  //   } catch(e) {
  //     error(e)
  //   }
  // },
  data() {
    return {
      pageTitle: 'Users page'
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  }
}
</script>