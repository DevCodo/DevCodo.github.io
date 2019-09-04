<template>
  <div class="wrapper" >
    <div class="progress" :style="getProgress"></div>
  </div>
</template>


<script>

export default {

  computed: {
    getProgress() {
      return `width: ${this.$store.getters.getProgress}%`
    }
  }
}
</script>


<style lang="scss" scoped>

.wrapper {
  height: 20px;
  width: 100%;
  background: rgb(216, 216, 216);
  border: 1px solid rgb(182, 182, 182);
  border-radius: 5px;
}
.progress {
  height: 100%;
  width: 0;
  background: rgb(105, 196, 219);
  border-radius: 5px;
  transition: .3s;
}

</style>