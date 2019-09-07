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
  flex-wrap: wrap;
}
.right {
  width: 50%;
  padding: 20px 0 20px 20px;
}
.left {
  width: 50%;
  padding: 20px 20px 20px 0;
}

 @media screen and (max-width: 770px) {
   .left {
     order: 1;
     width: 100%;
     padding: 20px 0;
   }
   .right {
     width: 100%;
     padding: 20px 0;
   }
}

</style>
