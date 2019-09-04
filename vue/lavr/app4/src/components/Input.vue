<template>
  <div>
    <p>
      {{ name }} 
      <span :class="validClass"></span>
    </p>
    <input :value="value" @input="onInput">
  </div>
</template>


<script>

export default {
  props: {
    name: String,
    value: String,
    valid: null,
    index: Number
  },

  created() {
    if (this.value) {
      this.$store.commit('changeItem', {
        value: this.value,
        index: this.index
      })
    }
  },

  computed: {
    validClass() {
      if (this.valid === true) return 'on'
      if (this.valid === false) return 'off'
    }
  },

  methods: {
    onInput(e) {
      this.$store.commit('changeItem', {
        value: e.target.value,
        index: this.index
      })
    }
  }
}
</script>


<style lang="scss" scoped>

.on, .off {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
.on {
  background: rgb(39, 155, 49);
}
.off {
  background: rgb(170, 56, 56);
}

input {
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgb(144, 144, 144);
  padding-left: 20px;
}

</style>