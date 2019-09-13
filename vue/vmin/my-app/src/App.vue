<template>
  <v-app>
    <v-navigation-drawer app temporary>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
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
  data: () => ({
    //
  }),
};
</script>
