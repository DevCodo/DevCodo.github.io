<template>
  <div>
  
  <button :class="{'green': switched}" @click="toggleSwitch(true)" >On</button>
  <button :class="{'red': !switched}" @click="toggleSwitch(false)" >On</button>
    
  </div>
</template>

<script>
import {eventEmiter} from '../main';
  export default {
  props: ['switched'],
  data() {
    return {
    
    }
  },
  methods: {
    toggleSwitch(param) {
      this.$emit('update:switched', param)
    }
  },
   
  }
</script>

<style lang="scss" scoped>

.green {
  background: green;
}

.red {
  background: red;
}

</style>