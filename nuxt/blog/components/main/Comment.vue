<template>
  <el-card class="comment">
    <div class="comment-header">
      <span class="name">Person name</span>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </div>
    <div class="comment-text">
      Lorem, ipsum dolor sit amet 
      consectetur adipisicing elit. At, rerum.
    </div>
  </el-card>
</template>

<script>
  export default {
    props: ['comment']
    
  }
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1re;
  }
  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .comment-text {
    white-space: pre-line;
  }
  .name {
    font-size: 1rem;
    font-weight: bold;
  }

</style>