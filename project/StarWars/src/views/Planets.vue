<template>
  <div>
    <RandomPlanet v-if="widthScreen > 700" />
    <Row>
      <div slot="left">
         <ItemList :dataAll="allPlanets" :pickItem="getPlanet" :page="page" >
          <router-link v-show="page > 1" :to="{name: 'planets', query: {page: page - 1}}" class="link prev">prev page</router-link>
          <router-link v-show="page < 6" :to="{name: 'planets', query: {page: page + 1}}" class="link next">next page</router-link>
        </ItemList> 
      </div>

      <div slot="right">
        <ItemDetails :imgUrl="planetImage" :data="planet" >
          <template v-slot="{ data }">
            <div class="item">Population {{data.population}}</div>
            <div class="item">Rotation Perios {{data.rotationPeriod}}</div>
            <div class="item">Diameter {{data.diameter}}</div>
            <router-link :to="{name: 'planet', params: { id: data.id }}" class="link">more detailed</router-link>
          </template>
        </ItemDetails>   
      </div>
    </Row> 
  </div>
</template>

<script>

import RandomPlanet from '../components/RandomPlanet';
import ItemList from '../components/ItemList';
import Row from '../components/Row';
import ItemDetails from '../components/ItemDetails';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    RandomPlanet,
    ItemList,
    Row,
    ItemDetails,
  },

  data() {
    return {
      widthScreen: window.innerWidth
    }
  },

  created() {
    this.$store.commit('people/setFullPath', null)
    this.page ? this.getAllPlanets(this.page) : this.getAllPlanets(1);

    window.addEventListener('resize', this.getWidth)
  },

  destroyed() {
    window.removeEventListener('resize', this.getWidth)
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.commit('people/setFullPath', to.fullPath)
    to.query.page ? this.getAllPlanets(to.query.page) : this.getAllPlanets(1);
    next();
  }, 

  computed: {
    ...mapGetters('planets', {
      allPlanets: 'allPlanets',
      planet: 'planet',
      planetImage: 'planetImage',
    }),
    page() {
      let page = +this.$route.query.page;
      return page ? page : 1
    },
    
  },

  methods: {
    ...mapActions('planets', {
      getAllPlanets: 'getAllPlanets',
      getPlanet: 'getPlanet',
    }),
    getWidth() {
      this.widthScreen = window.innerWidth;
    }
  },


}
</script>