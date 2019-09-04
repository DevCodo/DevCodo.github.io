<template>
  <form @submit.prevent="onSubmit">
    
    <Input v-for="(item, index) in getData" 
          :name="item.name" 
          :key="item.index"
          :value="item.value" 
          :valid="item.valid" 
          :index="index" />

    <button :disabled="isDisabled" >Sand Data</button>
  </form>
</template>



<script>

import Input from './Input';

export default {
  components: {
    Input
  },

  computed: {
    getData() {
      return this.$store.getters.data
    },
    isDisabled() {
      return this.$store.getters.getProgress != 100
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onShow')
      this.$store.dispatch('sendData')
    },
  }
}
</script>



<style lang="scss" scoped>

form {
  margin-top: 20px;
  width: 100%;
}

button {
  background: rgb(63, 110, 143);
  border-radius: 7px;
  height: 30px;
  color: #fff;
  margin: 20px auto;
}
button:disabled {
  background: rgb(86, 90, 92);
}

</style>