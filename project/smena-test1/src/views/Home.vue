<template>
  <div>
    dom
  </div>
</template>



<script>


export default {
  components: {
 
  },

  created() {
    this.$store.dispatch('getUser')
  }
};
</script>
