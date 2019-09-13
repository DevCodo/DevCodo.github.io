<template>
  <div>
    <v-card
      v-if="!user" 
      class="mx-auto mt-12"
      max-width="434"
      tile
    >
      <v-alert outlined type="error">{{messageProfile}}</v-alert>
    </v-card>
    <v-card
      v-if="user"
      class="mx-auto mt-12"
      max-width="434"
      tile
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row
          align="end"
          class="fill-height"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              tile
            >
              <v-img :src="user.avatar"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="title">{{user.username}}</v-list-item-title>
                <v-list-item-subtitle v-text="user.about"/>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {
  components: {
 
  },

  created() {
    
  },

  computed: {
    ...mapGetters(['error', 'user', 'messageProfile']),
  },

};
</script>
