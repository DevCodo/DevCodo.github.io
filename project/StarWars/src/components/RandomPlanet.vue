<template>
  <div class="wrapper" >

    <Spinner v-if="data === null" />

    <ErrorIndicator v-else-if="data === false" />

    <template v-else>
      <img :src="imgUrl" class="img" alt="">

      <div class="info">
          <div class="name">{{data.name}}</div> 

          <div class="item">Population {{data.population}}</div>
          <div class="item">Rotation Perios {{data.rotationPeriod}}</div>
          <div class="item">Diameter {{data.diameter}}</div>
        </div> 
    </template>

  </div>
</template>

<script>
import Spinner from './Spinner';
import ErrorIndicator from './ErrorIndicator';

export default {
  components: {
    Spinner,
    ErrorIndicator
  },
  
  data() {
    return {
      interval: null
    }
  },

  created() {
    this.$store.dispatch('planets/getRandomPlanet', this.getId());
    this.interval = setInterval(() => {
      this.$store.dispatch('planets/getRandomPlanet', this.getId());
    }, 2000);
  },

  destroyed() {
    clearInterval(this.interval);
  },

  computed: {
    data() {
      return this.$store.getters['planets/randomPlanet'];
    },
    imgUrl() {
      return this.$store.getters['planets/randomPlanetImage'];
    }
  },

  methods: {
    getId() {
      return Math.ceil(Math.random() * 18 + 1);
    },
  },




}
</script>

<style scoped lang="scss">

.wrapper {
  position: relative;
  height: 180px;
  width: 100%;
  background: #303030;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  color: #fff;
  margin: 20px 0;
}
.img {
  width: 150px;
  height: 150px;
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

</style>
