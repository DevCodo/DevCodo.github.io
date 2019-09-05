<template>
  <div id="app">
    <Header />
    <RandomPlanet />
    
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
}

html, body {
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background: #222222;
}

#app {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 25px;
}

</style>
