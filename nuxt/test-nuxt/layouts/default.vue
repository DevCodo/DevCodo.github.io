<template>
  <div class="container">
    <nav style="display: flex">
      <nuxt-link class="nav-link" exact active-class="active" to="/">Home</nuxt-link>
      <nuxt-link class="nav-link" active-class="active" to="/users">Users</nuxt-link>
      <nuxt-link no-prefetch class="nav-link" active-class="active" to="/about">About</nuxt-link>
      <nuxt-link class="nav-link" active-class="active" to="/login">Login</nuxt-link>
      <a v-if="isAuth" class="nav-link" @click.prevent="logout" >Logout</a>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .active {
    color: rgb(149, 0, 0);
  }
</style>
