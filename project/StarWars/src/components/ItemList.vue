<template>
  <div class="item_list">

    <Spinner v-if="data === null" />

    <ErrorIndicator v-else-if="data === false" />

    <template v-else>
      <div class="item" v-for="item in data"
          @click="pickItem(item.id)"
          :key="item.id">
        <span>{{ item.name }}</span> 
      </div>
    </template>
    
    <slot></slot>
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
  props: ['dataAll' ,'pickItem', 'page', 'maxPage'],

  computed: {
    data() {
      return this.dataAll;
    }
  },
}
</script>


<style scoped lang="scss">

.item_list {
  position: relative;
  width: 100%;
  min-height: 482px;
  background: #303030;
  border-radius: 5px;
  border: 1px solid #505050;
  margin-bottom: 50px;
}

.item {
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid #505050;
  cursor: pointer;
  &:last-child {
    border: none;
  }
  &:hover {
    background: #464646;
  }
}

.link {
  position: absolute;
  color: #fff;
  text-decoration: none;
  height: 34px;
  padding: 0 10px;
  background: #666;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  bottom: -50px;
  &:hover {
    background: #39a070;
  }
}  
.prev {

}
.next {
  right: 0px;
}

</style>
