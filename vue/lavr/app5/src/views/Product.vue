<template>
  <div class="product">
    <h2 v-if="!getProduct">Loading...</h2>
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

export default {

  computed: {
       ...mapGetters('cart', {
      inCart: 'products'
    }),
    getId() {
      return +this.$route.params.id
    },
    getProduct() {
      return this.$store.getters['products/item'](this.getId)
    }
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