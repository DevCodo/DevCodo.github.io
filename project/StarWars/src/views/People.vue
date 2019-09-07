<template>
  <div>
    <Row>
      <div slot="left">
        <ItemList :dataAll="allPeople" :pickItem="getPerson" >
          <router-link v-show="page > 1" :to="{name: 'people', query: {page: page - 1}}" class="link prev">prev page</router-link>
          <router-link v-show="page < 9" :to="{name: 'people', query: {page: page + 1}}" class="link next">next page</router-link>
        </ItemList> 
      </div>

      <div slot="right">
        <ItemDetails :imgUrl="personImage" :data="person" >
          <template v-slot="{ data }">
            <div class="item">Gender {{data.gender}}</div>
            <div class="item">Birth Year {{data.birthYear}}</div>
            <div class="item">Eye Color {{data.eyeColor}}</div>
            <router-link :to="{name: 'person', params: { id: data.id }}" class="link">more detailed</router-link>
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
    this.page ? this.getAllPeople(this.page) : this.getAllPeople(1);
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.commit('people/setFullPath', to.fullPath)
    to.query.page ? this.getAllPeople(to.query.page) : this.getAllPeople(1);
    next();
  }, 

  computed: {
    ...mapGetters('people', {
      allPeople: 'allPeople',
      person: 'person',
      personImage: 'personImage',
    }),
    page() {
      let page = +this.$route.query.page;
      return page ? page : 1
    }
  },

  methods: {
    ...mapActions('people', {
      getAllPeople: 'getAllPeople',
      getPerson: 'getPerson',
    })
  },

}
</script>