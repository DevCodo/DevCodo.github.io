<template>
  <div class="row">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<style scoped lang="scss">

.row {
  width: 100%;
  display: flex;
}
.left,
.right {
  width: 50%;
  padding: 20px;
}

</style>
