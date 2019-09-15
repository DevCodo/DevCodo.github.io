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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
          <v-icon left>mdi-{{link.icon}}</v-icon>
          {{link.title}}
          </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>

  </v-app>
</template>



<script>


export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      drawer: false,
      links: [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'bookmark-outline', url: '/orders'},
        {title: 'New ad', icon: 'file-plus', url: '/new'},
        {title: 'My ads', icon: 'format-list-bulleted', url: '/list'},
      ]
    }
  },
};
</script>


<style lang="scss">

.primary {
  background-color: #000!important;
}

</style>
