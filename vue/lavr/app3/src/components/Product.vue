<template>
 <div class="product" >
   <p>Price {{price}}</p>
   <button @click="decrement" :disabled=" cnt == 0" >-1</button>
   <input :value="cnt" @input="onInput">
   <button @click="increment" >+1</button>
   <div>{{orderState}}</div>
 </div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';

export default {
  data() {
    return {
      cnt: 0
    }
  },
  computed: {
    ...mapGetters(['price', 'orderState']),
   
  },
  methods: {
    ...mapMutations(['changeCnt']),

    onInput(e) {
      let value = e.target.value;
      let isNaNa = isNaN(parseInt(+value));

      if (value == "-") {
        this.cnt = value;
      } else if (isNaNa) {
        if (value > -20) {
          this.cnt = value;
          this.changeCnt(this.cnt)
        } else {
          this.cnt = this.cnt++
        }
      } 



      // if (!isNaN(parseInt(+value)) || value == "-") {
      //   if (value < -20) {
      //     this.cnt = this.cnt--;
      //   } else {
      //     console.log(parseInt(value))
      //     this.cnt = value;
      //     this.changeCnt(this.cnt)
      //   }
      // } else {
      //   this.cnt = this.cnt++;
      // }
    },
    increment() {
      this.cnt++
      this.changeCnt(this.cnt)
    },
    decrement() {
      if (this.cnt > 0) this.cnt--
      this.changeCnt(this.cnt)
    },
    // increment() {
    //   this.$store.commit('increment')
    // },
    // decrement() {
    //   this.$store.commit('decrement')
    // },
  }
}
</script>

<style lang="scss" scoped>
  .cart {
    
  }
</style>