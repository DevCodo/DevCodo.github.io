<template>

  <div class="container" @click="flip()" >
    <div class="flipper" :style="flipStyle">

      <div class="front">

      </div>

      <div class="back">

      </div>
      </div>
  </div>

</template>

<script>

export default {

  data() {
    return {
      isFlip: false
    }
  },

  computed: {
    flipStyle() {
      return this.isFlip ? '' : "transform: rotateY(180deg)";
    }
  },

  methods: {
    flip() {
      this.isFlip = !this.isFlip;
    }
  },


}
</script>

<style scoped lang="scss">


.container {
  width: 320px;
  margin: 20px auto;
  perspective: 1200;
  transform-style: preserve-3d;
}
.flipper {
  position: relative;
  width: 320px;
  height: 280px;
  transform-style: preserve-3d;
  transition: .7s linear;  
}
.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.front {
  z-index: 2;
  transform: rotateY(0deg);
  background: rgb(65, 128, 201);
}

.back {
  transform: rotateY(-180deg);
  background: rgb(54, 172, 54);
}

</style>
