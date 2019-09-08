<template>
  <div class="ditails">

    <Spinner v-if="data === null" />

    <ErrorIndicator v-else-if="data === false" />

    <template v-if="data && this.page === 'people'">
      <img :src="data.url" class="img" alt="">
      <div class="info">
        <div class="name">{{data.name}}</div>
        <div class="item">Gender {{data.gender}}</div>
        <div class="item">Birth year {{data.birthYear}}</div>
        <div class="item">Eye color {{data.eyeColor}}</div>
        <div class="item">Hair color {{data.hairColor}}</div>
        <div class="item">Height {{data.height}}</div>
        <div class="item">Mass {{data.mass}}</div>
        <div class="item">Skin color {{data.skinColor}}</div>
        <router-link :to="fullPath ? fullPath : '/people'" class="link">return back</router-link>
      </div> 
    </template>

    <template v-if="data && this.page === 'planets'">
      <img :src="data.url" class="img" alt="">
      <div class="info">
        <div class="name">{{data.name}}</div>
        <div class="item">Population {{data.population}}</div>
        <div class="item">Rotation period {{data.rotationPeriod}}</div>
        <div class="item">Diameter {{data.diameter}}</div>
        <div class="item">Climate {{data.climate}}</div>
        <div class="item">Gravity {{data.gravity}}</div>
        <div class="item">Orbital period {{data.orbitalPeriod}}</div>
        <div class="item">Terrain {{data.terrain}}</div>
        <div class="item">Surface water {{data.surfaceWater}}</div>
        <router-link :to="fullPath ? fullPath : '/planets'" class="link">return back</router-link>
      </div> 
    </template>

    <template v-if="data && this.page === 'starships'">
      <img :src="data.url" class="img" alt="">
      <div class="info">
        <div class="name">{{data.name}}</div>
        <div class="item">Model {{data.model}}</div>
        <div class="item">Manufacturer {{data.manufacturer}}</div>
        <div class="item">Cost in credits {{data.cost_in_credits}}</div>
        <div class="item">Length {{data.length}}</div>
        <div class="item">Crew {{data.crew}}</div>
        <div class="item">Passengers {{data.passengers}}</div>
        <router-link :to="fullPath ? fullPath : '/starships'" class="link">return back</router-link>
      </div> 
    </template>

  </div>
</template>


<script>
import Spinner from '../components/Spinner';
import ErrorIndicator from '../components/ErrorIndicator';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Spinner,
    ErrorIndicator
  },

  data() {
    return {
      page: null,
      id: null,
      fromPath: null
    }
  },

  created() {
    this.id = +this.$route.params.id;
    this.page = this.$route.path.match(/\/([a-z]*)\//)[1];
    if (this.page == 'people') this.getPersonDetails(this.id);
    if (this.page == 'planets') this.getPlanetDetails(this.id);
    if (this.page == 'starships') this.getStarshipDetails(this.id);
  },

  computed: {
    ...mapGetters({
      personDetails: 'people/personDetails',
      planetDetails: 'planets/planetDetails',
      starshipDetails: 'starships/starshipDetails',
      fullPath: 'people/fullPath',
    }),
    data() {
      if (this.page == 'people') return this.personDetails;
      if (this.page == 'planets') return this.planetDetails;
      if (this.page == 'starships') return this.starshipDetails;
    }
  },

  methods: {
    ...mapActions({
      getPersonDetails: 'people/getPersonDetails',
      getPlanetDetails: 'planets/getPlanetDetails',
      getStarshipDetails: 'starships/getStarshipDetails',
    }),
  },

}
</script>


<style scoped lang="scss">

.ditails {
  position: relative;
  width: 100%;
  min-height: 205px;
  background: #303030;
  border-radius: 5px;
  display: flex;
  padding: 15px;
  align-items: flex-start;
}
.img {
  width: 40%;
  border-radius: 5px;
}
.info {
  margin-left: 20px;
}
.name {
  font-size: 22px;
}
.item {
  font-size: 15px;
  margin-left: 10px;
  margin-top: 6px;
  border-top: 1px solid #505050;
  padding-top: 6px;
}
.link {
  color: #fff;
  text-decoration: none;
  height: 34px;
  padding: 0 10px;
  background: #39a070;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background: #666;
  }
}

 @media screen and (max-width: 480px) {
  .item {
    font-size: 13px;
  }
}

</style>
