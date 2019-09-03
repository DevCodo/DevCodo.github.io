<template>
  <div class="hello">
    <input :value="value" @input="onInput">
  </div>
</template>

<script>

// let str = "ht45-454g";
// let str2 = str.replace(/[a-zA-Zа-яА-Я,-]/g, "")
// console.log(str2)

export default {
  data() {
    return {
      value: ""
    }
  },

  methods: {
    onInput(e) {
      let value = e.target.value;
      let pattern = /^-?[0-9]*$/
      if (pattern.test(value)) {
        value = value == "-" || " " ? value : parseInt(value)
        this.value = value
      } else {
        this.value = value;
        this.value = value.replace(/[a-zA-Zа-яА-Я,-]/, "", str => {
          console.log(str)
        })
        // this.value = value.slice(0, - 1);
      }

 
    }
  }

}


</script>

<style scoped lang="scss">


</style>
