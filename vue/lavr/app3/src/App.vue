<template>
  <div class="app">
    <Header />
    <Content />

    <div>
      <p>Name</p>
      <input v-model="name">
    </div>

    <div>
      <p>Phone</p>
      <input v-model="phone">
    </div>
    <br>

    <button :disabled="ready" @click="onOrder" >Order now</button>

    <div class="order-wrapper" v-if="orderCart" @click="hideOrderCart" >
      <div class="order_box">
        <div>Товаров: {{cnt}}</div>
        <div>На сумму: {{totalAll}}</div>
        <div>Имя: {{nameOrder}}</div>
        <div>Телефон: {{phoneOrder}}</div>
      </div>
    </div>

  </div>
</template>




<script>
import Header from './components/Header';
import Content from './components/Content';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { constants } from 'crypto';

export default {
  components: {
    Header,
    Content
  },
  data() {
    return {
      orderCart: false,
      name: "",
      phone: ""
    }
  },
  computed: {
    // ...mapGetters(['cnt', 'total', 'orderState', 'name', 'phone']),
    ...mapGetters({
      cnt: 'cnt',
      totalAll: 'total',
      orderState: 'orderState',
      nameOrder: 'name',
      phoneOrder: 'phone'
    }),
    ready() {
      return this.cnt < 1 || this.orderState !== null;
    }
  },
  methods: {
    ...mapActions(['sendOrder']),
    onOrder() {
      this.sendOrder({
        name: this.name,
        phone: this.phone
      });
      this.orderCart = true;
    },
    hideOrderCart(e) {
      if(!e.target.closest(".order_box")) {
        this.orderCart = false
      }
    }
  }

}
</script>




<style lang="scss">
  .order-wrapper {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.171);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .order_box {
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
</style>

