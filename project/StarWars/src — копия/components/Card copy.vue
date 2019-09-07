<template>
  <div class="card" @click="clickFlip">
    <div class="box">
    <img :src="url" alt="">
    <span>{{name}}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: ['url', 'name'],
 
  data() {
    return {
     
    }
  },

  computed: {
    
  },

  methods: {
    clickFlip() {
      this.$emit('clickFlip')
    }
  },


}
</script>


<style scoped lang="scss">

.card {
  // width: 100px;
  // padding-bottom: 30%;
  background: #303030;
  border-radius: 5px;
  margin-bottom: 20px;
}
.box {
  position: relative;
}
img {
  width: 150px;
}
span {
  position: absolute;
}

</style>
