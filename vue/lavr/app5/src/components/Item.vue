<template>
  <div class="Item" @click="onClick" :class="className">
    Item
  </div>
</template>

<script>

export default {
  data() {
    return {
      className: ""
    }
  },

  methods: {
    onClick() {
      this.className = "animate"
    }
  }
}
</script>


<style lang="scss" scoped>

.Item {
  height: 150px;
  width: 150px;
  background: rgb(40, 120, 195);
}

.animate {
  transition: 1.5s;
  transform: rotate(360deg)
}

</style>