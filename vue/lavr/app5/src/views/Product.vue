<template>
  <div class="product">
    <!-- <div>{{getProduct}}</div> -->
    <h2 v-if="loading">Loading...</h2>
    <template v-else>
      <div>{{getProduct.title}}</div>
      <img :src="getProduct.thumbnailUrl" alt="">
      <div class="buttons">
          
          <button v-if="inCart.indexOf(getId) === -1"
                  class="add"
                  @click="addToCart(getId)">Add</button>
          <button v-else 
                  class="remove"
                  @click="removeFromCart(getId)">Remove</button>
        
        </div>
    </template>
    <router-link :to="{name: 'products'}">back to product</router-link>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import store from '../store';

export default {

  created() {
    this.$store.dispatch('products/loadItem', this.getId);
    
  },
   beforeRouteUpdate(to,from,next) {
     this.$store.dispatch('products/loadItem', to.params.id);
     this.getProduct
     next();
  },
  //  beforeRouteEnter(to,from,next) {
  //    console.log("Enter")
  //  store.dispatch('products/loadItem', to.params.id);
  // next();
  // },

  computed: {
       ...mapGetters('cart', {
      inCart: 'products'
    }),
    getId() {
      return +this.$route.params.id
    },
    getProduct() {
      return this.$store.getters['products/item'];
    },
    loading() {
      return this.$store.getters['products/loadingItem'];
    },

  },

  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    }),
  },
}
</script>


<style lang="scss" scoped>

.buttons {
  margin-top: 50px;
}

.add {
  background: rgb(77, 168, 104);
}
.remove {
  background: rgb(187, 100, 88);
}

</style>