<template>
  <div class="Product_list">
    <h1>Products</h1>
    <div class="box">
      <div class="product" v-for="(item) in products" :key="item.id_product">
        <div class="name">{{item.title}}</div>
        <div class="price">{{item.price}}</div>

        <div class="buttons">
          
          <button v-if="inCart.indexOf(item.id_product) === -1"
                  class="add"
                  @click="addToCart(item.id_product)">Add</button>
          <button v-else 
                  class="remove"
                  @click="removeFromCart(item.id_product)">Remove</button>
        
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    
  },
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters('products', {
      products: 'items'
    }),
    ...mapGetters('cart', {
      inCart: 'products'
    }),
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

.box {
  display: flex;
  justify-content: space-around
} 

.product {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  border: 1px solid rgb(124, 124, 124);
  border-radius: 10px;
}

.name {
  margin-bottom: 20px;
}

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