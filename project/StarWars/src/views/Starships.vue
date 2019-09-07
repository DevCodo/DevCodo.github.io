<template>
  <div>
    <Row>
      <div slot="left">
        <ItemList :dataAll="allStarships" :pickItem="getStarship" >
          <router-link v-show="page > 1" :to="{name: 'starships', query: {page: page - 1}}" class="link prev">prev page</router-link>
          <router-link v-show="page < 4" :to="{name: 'starships', query: {page: page + 1}}" class="link next">next page</router-link>
        </ItemList> 
      </div>

      <div slot="right">
        <ItemDetails :imgUrl="starshipImage" :data="starship" >
          <template v-slot="{ data }">
            <div class="item">Model {{data.model}}</div>
            <div class="item">Length {{data.length}}</div>
            <div class="item">Cost in credits {{data.costInCredits}}</div>
            <router-link :to="{name: 'starship', params: { id: data.id }}" class="link">more detailed</router-link>
          </template>
        </ItemDetails>   
      </div>
    </Row> 
  </div>
</template>

<script>

import ItemList from '../components/ItemList';
import Row from '../components/Row';
import ItemDetails from '../components/ItemDetails';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ItemList,
    Row,
    ItemDetails,
  },

  created() {
    this.$store.commit('people/setFullPath', null)
    this.page ? this.getAllStarships(this.page) : this.getAllStarships(1);
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.commit('people/setFullPath', to.fullPath)
    to.query.page ? this.getAllStarships(to.query.page) : this.getAllStarships(1);
    next();
  }, 

  computed: {
    ...mapGetters('starships', {
      allStarships: 'allStarships',
      starship: 'starship',
      starshipImage: 'starshipImage',
    }),
    page() {
      let page = +this.$route.query.page;
      return page ? page : 1
    }
  },

  methods: {
    ...mapActions('starships', {
      getAllStarships: 'getAllStarships',
      getStarship: 'getStarship',
    })
  },


}
</script>