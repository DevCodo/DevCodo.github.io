<template>
  <div id="app">

    <template v-if="!showOrder">
      <Progress />
      <Form @onShow="showOrder = true" />
      
    </template> 

    <Order v-else />
   
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Order from './components/Order.vue'
import Progress from './components/Progress.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex';


export default {
  components: {
    Form,
    Order,
    Progress
  },

  data() {
    return {
      showOrder: false,
    }
  }
}



</script>

<style lang="scss">

#app {
  width: 400px;
  margin: 0 auto;
}

</style>
