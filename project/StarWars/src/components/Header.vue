<template>
  <header>
    <div class="logo">
      <router-link to='/' >Star Wars</router-link>
    </div>
    <nav>
      <router-link :to="{name: 'people'}" active-class="link_active" class="link">People</router-link>
      <router-link :to="{name: 'planets'}" active-class="link_active" class="link">Planets</router-link>
      <router-link :to="{name: 'starships'}" active-class="link_active" class="link">Starships</router-link>
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
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.logo {
  flex-shrink: 0;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 35px;
    &:hover {
      color: #39a070;
    }
  }
}
nav {
  margin-left: 70px;
}
.link {
  color: #39a070;
  text-decoration: none;
  font-size: 18px;
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

@media screen and (max-width: 600px) {
  header {
    margin-bottom: 60px;
  }
  .logo {
    a {
      font-size: 28px;
    }
  }
  nav {
    margin-left: 0px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .link {
    font-size: 16px;
    height: 40px;
  }
}

</style>