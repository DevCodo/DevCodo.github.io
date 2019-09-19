<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.error-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-title {
  color: rgb(194, 91, 91);
  font-size: 30px;
  margin-top: 4rem;
  margin-bottom: 1rem;
}
</style>