<template>
  <div class="app">
    <header>
      <div class="logo">Site</div>
      <div class="cart">In Cart:</div>
    </header>
    <div class="wrapper">
      <nav>
      <ul>
        <router-link v-for="(item, index) in menuList" 
                    :key="index" 
                    tag="li"
                    class="item"
                    active-class="item_active"
                    exact
                    :to="item.url">
          <a>{{item.text}}</a>
        </router-link>

      </ul>
      </nav>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>


<script>

import { mapGetters } from 'vuex' 

export default {
  computed: {
    ...mapGetters({
      menuList: 'menu/items'
    }),
    // ...mapGetters('menu', {
    //   menuList: 'items'
    // }),
    // menuList() {
    //   return this.$store.getters['menu/items']
    // }
    
  },
}
</script>



<style lang="scss">

header {
  display: flex;
  justify-content: space-between
}

.wrapper {
  display: flex;
}

main {
  width: 100%;
  margin-left: 20px;
}

nav {
  width: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  overflow: hidden;
}
.item {
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b4b4b4;
  &:last-child {
    border: none;
  }
}

.item_active {
  background: rgb(114, 126, 195);
}
.item_active a {
  // background: #000;
  color: rgb(255, 255, 255);
}

a {
  color: #000;
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}




</style>
