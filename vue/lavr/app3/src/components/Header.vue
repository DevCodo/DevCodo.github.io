<template>
  <header>
    <div class="logo">Header</div>
    <Cart />
  </header>
</template>

<script>
import Cart from './Cart';

export default {
  components: {
    Cart
  },
  props: ['cnt'],

}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
</style>