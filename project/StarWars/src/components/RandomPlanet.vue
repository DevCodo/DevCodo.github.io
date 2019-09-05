<template>
  <div class="wrapper" :style="{background: `url(https://avatars.mds.yandex.net/get-pdb/231404/93746b8d-16e2-4b3e-9b10-beb12b783788/s1200)`}">
    <div class="img" style="background: url('../img/card-back.jpg')"></div>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  height: 180px;
  width: 100%;
  background: #303030;
  border-radius: 5px;
}

.img {
  width: 150px;
  height: 150px;
  // background-image: url('../img/card-back.jpg');
}

</style>
