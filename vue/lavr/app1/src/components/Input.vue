<template>
  <div >
    <p>{{name}}</p>
    <input :value="value"
          :class="setClass"
          @input="onInput">
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: String,
    pattern: RegExp
  },
  data() {
    return {
      showClass: this.value
    }
  },
  computed: {
    setClass() {
      if (this.showClass) {
        let valid = this.pattern.test(this.value);
        this.$emit("update:valid", valid)
        return valid ? "ok" : "off";
      }
    }
  },
  methods: {
    onInput(e) {
      this.showClass = true;
      this.$emit("update:value", e.target.value)
      this.$emit("update:valid", this.pattern.test(e.target.value))
    }
  }
}
</script>

<style scoped lang="scss">

  .ok {
    background: lightgreen;
  }

  .off {
    background: red;
  }

</style>
