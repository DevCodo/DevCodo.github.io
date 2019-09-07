<template>
  <div class="container" @click="fliping()" >
    <div class="flipper" :style="flipStyle">

      <div class="front" >
      </div>

      <div class="back" :style="{backgroundImage: `url(${url})`}">
        <!-- <img :src="url" alt=""> -->
      </div>
      
    </div>
  </div>
</template>


<script>
export default {
  props: ['url', 'wait', 'flip'],

  computed: {
    flipStyle() {
      return this.flip ? "transform: rotateY(180deg)" : "";
    },
  },

  methods: {
    fliping() {
      if (this.wait || this.flip) return;
      this.$emit('clickFlip', {
      })
    },
  },


}
</script>


<style scoped lang="scss">

.container {
  width: calc(18%);
  padding-bottom: 24.75%;
  margin: 1%;
  perspective: 1200;
  transform-style: preserve-3d;
  transition: 1s;
  cursor: pointer;
}
.flipper {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: .5s linear;  
}
.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid #a8a8a8;
}
.front {
  z-index: 2;
  transform: rotateY(0deg);
  background-image: url('../img/card-back.png');
}
.back {
  transform: rotateY(-180deg);
}


</style>
