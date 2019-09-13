<template>
  <div >
    <label>Name
      <input type="text" v-model="name">
    </label>
    <br>
    <label>Year
      <input type="text" v-model="year">
    </label>
    <br>
      <button @click="sendData">Send</button>
      <button @click="getData">Get</button>
    <div>
      <table>
        <tr v-for="item in data" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.year}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>



export default {

  data() {
    return {
      name: "",
      year: 2018,
      data: [],
    }
  },
  created () {
  },
  methods: {
    sendData() {
      this.$http.post('cars/', {
        name: this.name,
        year: this.year
      })
      .then(res => res.json())
      .then(body => {
        console.log(body)
      })
    },
    getData() {
      this.$http.get("cars/")
      .then(res => this.data = res.body)
    }
  },

}
</script>

<style lang="scss">

</style>

