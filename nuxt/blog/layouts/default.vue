<template>
  <el-container>
    <el-header>
      <Navigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>

</template>

<script>
import Navigation from '@/components/main/Navigation';
export default {
  components: {
    Navigation,
  }
}
</script>


<style>

</style>
