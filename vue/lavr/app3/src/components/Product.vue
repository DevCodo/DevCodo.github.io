<template>
 <div class="product" >
   <p>Price {{price}}</p>
   <button @click="decrement" :disabled=" cnt == 0" >-1</button>
   <Input :value="cnt" :max="9999999" :min="-210" @getCnt="getCnt"/>
   <!-- <input :value="cnt" @input="onInput"> -->
   <button @click="increment" >+1</button>
   <div>{{orderState}}</div>
 </div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';
import Input from './Input';

export default {
  components: {
    Input
  },
  data() {
    return {
      cnt: 50
    }
  },
  computed: {
    ...mapGetters(['price', 'orderState']),
   
  },
  methods: {
    ...mapMutations(['changeCnt']),
    getCnt(cnt) {
      this.cnt = cnt;
      this.changeCnt(cnt)
    },
    // onInput(e) {
    //   let value = e.target.value;
    //   let pattern = /^-?[0-9]*$/;

    //   if (pattern.test(value)) {
        
    //     if (value == "") {
    //       this.cnt = 0
    //       this.changeCnt(this.cnt)
    //     } else if (value == "-") {
    //       this.cnt = "-" 
    //     } else {
    //       this.cnt = parseInt(value);
    //       this.changeCnt(this.cnt)
    //     }

    //   } else {

    //     let oldCnt = this.cnt
    //     this.cnt = "0";
    //     this.cnt = oldCnt;

    //   }
    // },
    increment() {
      console.log("+`1")
      this.cnt++
      this.changeCnt(this.cnt)
    },
    decrement() {
      this.cnt--
      this.changeCnt(this.cnt)
    },
  }
}
</script>

<style lang="scss" scoped>
  .cart {
    
  }
</style>