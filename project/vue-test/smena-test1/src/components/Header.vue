<template>
  <v-app-bar app dark class="primary">
    <v-toolbar-title>
      <router-link to="/" class="logo">
        <v-toolbar-title>Smena</v-toolbar-title>
      </router-link>
    </v-toolbar-title>  
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/login" v-show="!user">
        <v-icon left>mdi-login</v-icon>
        Войти
      </v-btn>
      <v-btn text to="/register" v-show="!user">
        <v-icon left>mdi-lock-open-outline</v-icon>
        Зарегистрироваться
      </v-btn>
      <v-btn text v-show="user" @click="logout">
        <v-icon left>mdi-logout</v-icon>
        выйти
        </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>


<style lang="scss" scoped>

.logo {
  color: #fff;
  text-decoration: none;
}

</style>