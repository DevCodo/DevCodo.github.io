<template>
  <div class="container" @click="flip()" >
    <div class="flipper" :style="flipStyle">
      <div class="front">
        <div class="header">
          <i class="fa fa-creative-commons fa-2x"></i>
          <h3>Wedding Agency</h3>
        </div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      <div class="back">
        <h3>About Us</h3>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    value: null
  },

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
  text-align: center;
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
  box-sizing: border-box;
  font-family: 'Cabin', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px 20px 20px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.front {
  z-index: 2;
  transform: rotateY(0deg);
  background: white;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #f5f5f5;
}

.back {
  transform: rotateY(-180deg);
  background: #DCB8B2;
  color: white;
}

// .flipper{
//   transform: rotateY(180deg);
// }

// .container:hover .flipper{
//   transform: rotateY(180deg);
// }

</style>
