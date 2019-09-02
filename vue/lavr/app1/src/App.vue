<template>
  <div >
    <div class="wrapper">
      <div class="progress" :style="getProgress"></div>
    </div>

    <Input v-for="(item, index) in info" 
            :name="item.name"
            :value="item.value"
            :pattern="item.pattern"
            @changevalue="changeValue($event, index)"
            :key="index" />
  </div>
</template>

<script>
import Input from './components/Input';

export default {
  components: {
    Input,
  },
  data() {
    return {
      info: [
        {
          name: "Name",
          value: "dfdfd",
          pattern: /^[a-zA-Z]{2,30}$/,
          valid: false
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{5,30}$/,
          valid: false
        },
        {
          name: "Email",
          value: "",
          pattern: /.+@.+/,
          valid: false
        },
        {
          name: "Some Field",
          value: "",
          pattern: /.+/,
          valid: false
        },
      ],
    }
  },
  computed: {
    getProgress() {
      let count = 0;
      let length = this.info.length;
      this.info.forEach(item => {
        if (item.valid) count++;
      })
      return `width: ${count / length * 100}%`
    }
  },
  methods: {
    changeValue(e, index) {
      this.info[index].value = e.value;
      this.info[index].valid = e.valid;
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  height: 20px;
  width: 400px;
  background: #bbb;
  border: 1px solid #999;
  border-radius: 5px;
}
.progress {
  background: lightBlue;
  height: 100%; 
  width: 0;
  transition: 0.3s;
  border-radius: 5px;
}
</style>
