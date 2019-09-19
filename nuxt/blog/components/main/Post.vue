<template>
  <el-card 
  :body-style="{padding: 0}"
  class="post"
  shadow="hover" >
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img 
      src="https://www.berlin.de/binaries/asset/image_assets/5719603/ratio_2_1/1560241983/624x312/" 
      alt="post image" 
      class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
  export default {
    methods: {
      openPost() {
        const id = 'test-id'
        this.$router.push(`post/${id}`)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }
  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-img {
    width: 100%;
  }
  .post-footer {
   padding: 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
</style>