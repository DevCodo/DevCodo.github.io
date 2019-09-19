<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          13
        </small>
      </div>
      <div class="post-image">
         <img 
          src="https://www.berlin.de/binaries/asset/image_assets/5719603/ratio_2_1/1560241983/624x312/" 
          alt="post image">
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ab est sit neque cum, fugiat corporis fugit, nihil quaerat perspiciatis excepturi placeat error quasi reiciendis vel? Ex architecto possimus facilis?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ab est sit neque cum, fugiat corporis fugit, nihil quaerat perspiciatis excepturi placeat error quasi reiciendis vel? Ex architecto possimus facilis?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ab est sit neque cum, fugiat corporis fugit, nihil quaerat perspiciatis excepturi placeat error quasi reiciendis vel? Ex architecto possimus facilis?</p>
    </main>
    <footer>
      <CommentForm />
      <div class="comments" v-if="false">
        <Comment 
          v-for="comment in 4"
          :key="comment"
          :comment="comment"/>
      </div>
      <div class="text-center" v-else>Коментариев нет</div>
    </footer>
  </article>
</template>

<script>
import Comment from '@/components/main/Comment';
import CommentForm from '@/components/main/CommentForm';

  export default {
    validate({params}) {
      return !!params.id
    },
    components: {
      Comment,
      CommentForm,
    }
  }
</script>

<style lang="scss" scoped>

  .post {
    max-width: 600px;
    margin: 0 auto;
  }
  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .post-header {
    margin-bottom: 1.5rem;
  }
  .post-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .post-content {
    margin-bottom: 2rem;
  }


</style>