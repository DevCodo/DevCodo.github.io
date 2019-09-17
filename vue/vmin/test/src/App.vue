<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.title" :to="link.url">

          <v-list-item-icon>
            <v-icon >mdi-{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-list-item @click="onLogout" v-if="isUserLoggedIn">

          <v-list-item-icon>
            <v-icon >mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="'Logout'"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
          <v-icon left>mdi-{{link.icon}}</v-icon>
          {{link.title}}
          </v-btn>

           <v-btn text @click="onLogout" v-if="isUserLoggedIn">
            <v-icon left>mdi-logout</v-icon>
          Logout
          </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar
        :color="'error'"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn ark text @click="closeError" >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>



<script>

export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error 
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn 
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Orders', icon: 'bookmark-outline', url: '/orders'},
          {title: 'New ad', icon: 'file-plus', url: '/new'},
          {title: 'My ads', icon: 'format-list-bulleted', url: '/list'},
        ]
      } else {
        return [
          {title: 'Login', icon: 'lock', url: '/login'},
          {title: 'Registration', icon: 'face', url: '/registration'},
        ]
      }
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    },
    onLogout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    },
  },
};
</script>



<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>