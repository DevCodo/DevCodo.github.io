<template>
  <div class="ditails">

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
  props: ['data', 'imgUrl'] ,

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
.link {
  color: #fff;
  text-decoration: none;
  height: 34px;
  padding: 0 10px;
  background: #39a070;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background: #666666;
  }
}

 @media screen and (max-width: 480px) {
  .item {
    font-size: 13px;
  }
}

</style>
