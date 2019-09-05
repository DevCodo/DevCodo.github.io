<template>
  <div class="Product_list">
    <h1>Products</h1>
    <div class="box">
      <div class="product" v-for="(item) in products" :key="item.id">

        <div class="name">
          <router-link tag="h3" :to="{name: 'product', params: {id: item.id}}">
            <a>{{item.title}}</a>
          </router-link>
        </div>
        <img :src="item.thumbnailUrl" alt="">

        <div class="buttons">
          
          <button v-if="inCart.indexOf(item.id) === -1"
                  class="add"
                  @click="addToCart(item.id)">Add</button>
          <button v-else 
                  class="remove"
                  @click="removeFromCart(item.id)">Remove</button>
        
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    


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
  flex-wrap: wrap;
} 

.product {
  width: 30%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 200px;
  border: 1px solid rgb(124, 124, 124);
  border-radius: 10px;
}

.name {
  margin-bottom: 20px;
}

.buttons {
  margin: 20px;
}

.add {
  background: rgb(77, 168, 104);
}
.remove {
  background: rgb(187, 100, 88);
}

</style>