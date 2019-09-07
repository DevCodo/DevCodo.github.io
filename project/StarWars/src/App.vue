<template>
  <div id="app">
    <Header />
    
    <transition name="show" mode="out-in" appear>
      <router-view />
           <!-- <router-view name="second" /> -->
    </transition>

  </div>
</template>

<script>
import Header from './components/Header'
import RandomPlanet from './components/RandomPlanet'

export default {
  components: {
    Header,
    RandomPlanet
  }
}
</script>


<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
html, body {
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background: #222222;
  color: #fff;
  overflow-x: hidden;
}
#app {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 25px;
}

.show-enter,
.show-leave-to {
  transform: scale(0);
}
.show-enter-active,
.show-leave-active {
  transition: 0.4s;
}


</style>
