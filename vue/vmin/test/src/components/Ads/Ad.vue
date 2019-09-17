<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
         <v-card class="elevation-10 mb-5">
            <v-img :src="ad.imageSrc" height="300px"></v-img>
            <v-card-text>
              <h2 class="text--primary">{{ad.title}}</h2>
              <p>{{ad.description}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="warning">Edit</v-btn>
              <v-btn class="success" >Buy</v-btn>
            </v-card-actions>
          </v-card>
         
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: ['id'],
 computed: {
   ad() {
     return this.$store.getters.adById(this.id)
   }
 },
};
</script>
