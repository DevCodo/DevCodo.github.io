<template>
  <header>
    <div class="logo">
      <router-link to='/'>
      <!-- Star Wars -->
        <img src="../img/logo.png" alt="logo">
      </router-link>
    </div>
    <nav>
      <router-link to="/people" active-class="link_active" class="link">People</router-link>
      <router-link to="/planets" active-class="link_active" class="link">Planets</router-link>
      <router-link to="/starships" active-class="link_active" class="link">Starships</router-link>
    </nav>
  </header>
</template>

<script>

export default {
  
}
</script>


<style lang="scss" scoped>

header {
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  cursor: pointer;
  img {
    height: 100%;
  }
}
nav {
  margin-left: 100px;
}
.link {
  color: #348b62;
  text-decoration: none;
  font-size: 24px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0 20px;
  &:hover {
    background: #303030;
  }
}
.link_active {
  color: #fff;
}

</style>