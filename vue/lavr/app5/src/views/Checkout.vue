<template>
  <div id="flip-list-demo" class="demo">
    <button v-on:click="shuffle">Перемешать</button>
    <transition-group name="flip-list" tag="div" class="box">
      <div v-for="item in items" v-bind:key="item" class="item"
      
      >
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>


<script>
// import Item from '../components/Item';

export default {
  // components: {
  //   Item
  // },
  data() {
    return {
      // items: [1,2,3,4,5,6,7,8,9],
      items: [],
    }
  },

  created() {
    for (let i = 0; i < 12; i++ ) {
      this.items[i] = i + 1
    }
  },

  methods: {
    shuffle: function () {
      let array = [...this.items]
       for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      this.items = array
    },
  },


}
</script>

<style lang="scss" scoped>
  .flip-list-enter .item{
    background: #000;
  }
  .flip-list-enter-active .item{
    background: rgb(200, 26, 26);
  }
  .flip-list-move {
    opacity: 0.7!important;
    
  }
  .item {
    width: 100px;
    height: 100px;
    background: rgb(97, 182, 197);
    margin: 5px;
    width: 25%;
    display: inline-block;
    transition: 1s;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
  }
</style>