<template>
  <div class="">
    <h3>{{name}}</h3>
    <button @click="Increment">Increment</button>
  </div>
</template>

<script>
import {eventEmiter} from '../main';

export default {
  props: ['name'],
  data() {
    return {
      key: 1
    }
  },
  methods: {
    Increment() {
      eventEmiter.$emit('increment')
    },

  },
}
</script>

<style scoped lang="scss">

</style>
