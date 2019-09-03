<template>
  <div class="content">
    <Product />
  </div>
</template>

<script>
import Product from './Product';

export default {
  components: {
    Product
  },
  props: ['cnt'],

}
</script>

<style lang="scss" scoped>
 
</style>