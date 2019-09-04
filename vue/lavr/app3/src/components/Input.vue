<template>
  <div class="input">
    <input :value="cnt" @input="onInput">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: null,
      default: 0
    },
    min: {
      type: null,
      default: -Infinity
    },
    max: {
      type: null,
      default: Infinity
    }
  },

  data() {
    return {
      cnt: this.value
    }
  },

  methods: {
    onInput(e) {
      let value = e.target.value;
      let pattern = /^-?[0-9]*$/;

      if (pattern.test(value)) {
        
        if (value == "") {
          this.cnt = 0
          this.sendCnt()
        } else if (value == "-") {
          this.cnt = "-" 
        } else {
          this.cnt = Math.min( Math.max( parseInt(value), this.min ), this.max );
          this.cnt = this.cnt + ""
          this.sendCnt()
        }

      } else {
        let oldCnt = this.cnt
        this.cnt = "0";
        this.cnt = oldCnt;
      }
    },
    sendCnt(param) {
      this.$emit('getCnt', this.cnt)
    },
  }
  
}
</script>

