<template>
  <div >
    <transition-group class="box">
      <Cart v-for="(item, index) in carts" :key="index" 
      :value="item"
      
       />
    </transition-group>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  components: {
    Cart
  },

  data() {
    return {
      carts: [],
    }
  },

  created() {
    for (let i = 0; i < 12; i++) {
      this.carts.push(i + 1)
    }
  },


}
</script>

<style lang="scss">

.box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

</style>
