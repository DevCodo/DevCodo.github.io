<template>
  <div class="game">

    <!-- <div v-if="!cards" class="overlay">
      <Spinner />
    </div> -->
    
    <transition-group name="shuffle" tag="div" class="box">

      <div v-for="(item, index) in arr" :key="index" @click="shuffle()" class="box3">
        <div>
          {{item}}
        </div>
      </div>


      <!-- <Card v-for="(item, index) in cards"
      @clickFlip="clickFlip()"
  
      :name="item.name"
      :url="item.url"
      :key="index" /> -->



      <!-- <div v-for="(item, index) in cards" :key="index" @click="shuffle()" class="it">
        <span>{{item.name}}</span>
        <img :src="item.url" alt="">
      </div> -->

    </transition-group>

  </div>
</template>


<script>
import Card from './Card';
import Spinner from './Spinner';

export default {

  components: {
    Card,
    Spinner,
  },
 
  data() {
    return {
      cards: this.getCards,
      arr: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  },

  created() {
    this.cards = this.$store.getters['game/cards'];
  },

  computed: {
    getCards() {
      return this.$store.getters['game/cards'];
    }
  },

  methods: {
    clickFlip(index) {
      console.log(13)
      this.shuffle()
    },
    shuffle() {
      let array = [...this.arr]
       for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      this.arr = array
    },
  },

  watch: {
    getCards() {
      this.cards = this.getCards
    }
  }
}
</script>


<style scoped lang="scss">

.game {
  position: relative;
  // width: 100%;
  // height: 100%;
}
.overlay {
  // position: absolute;
  // height: 100%;
  // width: 100%;
  background: #000;
}
.box {
  margin: 50px auto;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
.shuffle-move {
  // opacity: 0.7!important;
  transition: 1s;
  
}
// .item {
//   width: 100px;
//   height: 100px;
//   background: rgb(97, 182, 197);
//   margin: 5px;
//   width: 25%;
//   display: inline-block;
//   transition: 1s;
// }

.box3 {
  // width: 16%;
  // padding-bottom: 16%;
  background: rgb(219, 51, 51);;
  margin: 5px;
}


</style>
