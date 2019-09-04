<template>
  <div class="order">
    <div v-if="isLoading">Loading...</div>
    <template v-else>
      <div class="header">Site</div>
      <p>Hello, {{data.Name}}</p>

      <table>
        <tr v-for="(value, key) in data" :key="key">
          <td>{{key}}</td>
          <td>{{value}}</td>
        </tr>
      </table>
    </template>
  </div>
</template>


<script>
export default {

  computed: {
    data() {
      return this.$store.getters.getPersonalData;
    },
    isLoading() {
      console.log(this.$store.getters.loading)
      return this.$store.getters.loading
    }
  }

}
</script>


<style lang="scss" scoped>

</style>