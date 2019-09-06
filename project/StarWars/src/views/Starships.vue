<template>
  <div>
    <Row>
      <div slot="left">
        <ItemList :dataAll="allStarships" :pickItem="getStarship" />
      </div>

      <div slot="right">
        <Details :imgUrl="starshipImage" :data="starship" >

          <span slot="choose">Choose a Starship</span>

          <template v-slot="{ data }">
            <div class="item">Gender {{data.gender}}</div>
            <div class="item">Birth Year {{data.birthYear}}</div>
            <div class="item">Eye Color {{data.eyeColor}}</div>
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
    ...mapGetters('starships', {
      allStarships: 'allStarships',
      starship: 'starship',
      starshipImage: 'starshipImage',
    }),
  },

  methods: {
    ...mapActions('starships', {
      getStarship: 'getStarship',
    })
  },


}
</script>