<template>
  <div class="ditails">

    <div v-if="data === undefined" class="choose">
      <slot name="choose"></slot>
    </div>

    <Spinner v-if="data === null" />

    <ErrorIndicator v-else-if="data === false" />

    <template v-if="data">
      <img :src="imgUrl" class="img" alt="">
      <div class="info">
        <div class="name">{{data.name}}</div>
        <slot :data="data"></slot> 
      </div> 
    </template>

  </div>
</template>


<script>
import Spinner from './Spinner';
import ErrorIndicator from './ErrorIndicator';

export default {
  components: {
    Spinner,
    ErrorIndicator
  },
  props: {
    data: null,
    imgUrl: null
  },
}
</script>


<style scoped lang="scss">

.ditails {
  position: relative;
  width: 100%;
  min-height: 205px;
  background: #303030;
  border-radius: 5px;
  display: flex;
  padding: 15px;
  align-items: flex-start;
}
.img {
  width: 124px;
  border-radius: 5px;
}
.info {
  margin-left: 20px;
}
.name {
  font-size: 22px;
}
.item {
  font-size: 15px;
  margin-left: 10px;
  margin-top: 6px;
  border-top: 1px solid #505050;
  padding-top: 6px;
}
.choose {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #808080;
}

</style>
