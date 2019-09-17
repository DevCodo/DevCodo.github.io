<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
             v-for="ad in promoAds"
             :key="ad.id"
             :src="ad.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id" >{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row>
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card class="mx-auto" max-width="400" >
            <v-img class="white--text" height="200px" :src="ad.imageSrc" >
            </v-img>
            <v-card-title class="align-end fill-height">
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">By</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>

export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds
    },
    ads() {
      return this.$store.getters.ads
    },
  }
};
</script>

<style lang="scss" scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.493);
  transform: translate(-50%, 0);
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
