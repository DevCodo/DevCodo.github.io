<template>
  <div>
    <Row>
      <div slot="left">
        <ItemList :dataAll="allPeople" :pickItem="getPerson" />
      </div>

      <div slot="right">
        <Details :imgUrl="personImage" :data="person" >

          <span slot="choose">Choose a Person</span>

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
    ...mapGetters('people', {
      allPeople: 'allPeople',
      person: 'person',
      personImage: 'personImage',
    }),
  },

  methods: {
    ...mapActions('people', {
      getPerson: 'getPerson',
    })
  },


}
</script>