<template>
  <div class="game">

    <div class="overlay" v-show="overlay" >
      <Spinner v-if="cards === null" />
      <ErrorIndicator v-else-if="cards === false" />
      <img v-else src="../img/play.png" @click="play()">
    </div>

    

    <transition-group name="shuffle" tag="div" class="box" >
        <Card v-for="(item, index) in cards" :key="item.uniqueId" 
        @clickFlip="clickFlip(index)" 
        :flip='item.flip'
        :wait="wait"
        :url="item.url" />
    </transition-group>
    
  </div>
</template>


<script>
import Card from './Card';
import Spinner from './Spinner';
import ErrorIndicator from './ErrorIndicator';

export default {
    components: {
    Card,
    Spinner,
    ErrorIndicator,
  },
  data() {
    return {
      cards: this.getCards,
      wait: false,
      first: null,
      second: null,
      overlay: true
    }
  },
  
 created() {
    this.cards = this.$store.getters['game/cards'];
    if (this.cards) {
      this.cards.forEach((card) => {
        card.flip = false;
      }); 
    }
  },

  computed: {
    getCards() {
      return this.$store.getters['game/cards'];
    }
  },

  methods: {
    play() {
      this.overlay = false;
      this.cards.forEach((card) => {
        card.flip = true;
      }); 
      setTimeout(() => {
        this.start();
      }, 600);
    },
    clickFlip(index) {
      
      this.cards[index].flip = true;

      if (this.first === null) {
        this.first = index;
      } else {
        this.second = index;

        if (this.cards[this.first].id != this.cards[this.second].id) {
          this.no();
        } else {
          this.yes();
        }
      }
    },
    no() {
      this.wait = true;
      setTimeout(() => {
        this.cards[this.first].flip = false;
        this.cards[this.second].flip = false;
        this.first = null;
        this.second = null;
        this.wait = false;
      }, 500);
    },
    yes() {
      this.wait = true;
      this.first = null;
      this.second = null;
      setTimeout(() => {
        this.wait = false;
        this.checkEveryFlip();
      }, 300);
    },
    checkEveryFlip() {
      if (this.cards.every(card => card.flip)) {
        this.start()
      }
    },
    start() {
      this.shuffle();
      this.cards.forEach((card, i) => {
        setTimeout(() => {
          card.flip = false;
        },i * 100 + 1000);
      }); 
    },
    shuffle() {
      let array = [...this.cards];
       for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      this.cards = array;
    },
    
  },

  watch: {
    getCards() {
      this.cards = this.getCards
    }
  }


}
</script>

<style lang="scss" scoped>

  .game {
    position: relative;
    width: 100%;
    min-height: 642px;
    margin: 0 auto;
    max-width: 600px;
    margin-top: 70px;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    img {
      width: 100px;
      cursor: pointer;
    }
  }

  .shuffle-move {
    opacity: 0.7!important;
  }
  .box {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 700px) {
    .game {
      margin-top: 100px;
      min-height: 350px;
    }
  }
</style>