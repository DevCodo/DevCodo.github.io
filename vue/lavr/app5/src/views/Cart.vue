<template>
  <div class="Cart">
    <h1>Cart</h1>

    <template v-if="productInCar.length">
      <table>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>

        <tr v-for="(item, index) in productInCar" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.price}}</td>
        </tr>

      </table>

      <button @click="onOrder">Order now</button>
        
    </template>

    <div v-else>Cart is empty</div>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', {
      inCart: 'products',
    }),
    ...mapGetters('products', {
      products: 'items',
    }),

    productInCar() {
      return this.products.filter(item => {
        return this.inCart.indexOf(item.id_product) !== -1
      })
    }
  },

  methods: {
    onOrder() {
      this.$router.push({name: 'checkout'})
    }
  },
}
</script>