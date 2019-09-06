<template>
  <div>
    <Row>
      <div slot="left">
        <ItemList :dataAll="allPlanets" :pickItem="getPlanet" />
      </div>

      <div slot="right">
        <Details :imgUrl="planetImage" :data="planet" >

          <span slot="choose">Choose a Planet</span>

          <template v-slot="{ data }">
            <div class="item">Population {{data.population}}</div>
            <div class="item">Rotation Perios {{data.rotationPeriod}}</div>
            <div class="item">Diameter {{data.diameter}}</div>
          </template>
        </Details>   
      </div>
    </Row> 
  </div>
</template>

<script>

import ItemList from '../components/ItemList';
import Row from '../components/Row';
import Details from '../components/Details';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ItemList,
    Row,
    Details,
  },

  computed: {
    ...mapGetters('planets', {
      allPlanets: 'allPlanets',
      planet: 'planet',
      planetImage: 'planetImage',
    }),
  },

  methods: {
    ...mapActions('planets', {
      getPlanet: 'getPlanet',
    })
  },


}
</script>