<template>
 <div class="cart" >
   <span>В корзине: {{cnt}} на сумму: {{total}}</span>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['total', 'cnt']),

}
</script>

<style lang="scss" scoped>

</style>