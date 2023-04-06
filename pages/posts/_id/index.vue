<template lang="pug">
.single-post-page
  section.post    
    h1.post-title {{loadedPost.title}}
    .post-details
      .post-detail {{loadedPost.updatedDate}}
      .post-detail {{loadedPost.author}}
    p.post-content {{loadedPost.content}}
  section.post-feedback
    p let me know what you think about the post
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData(context) {
      return axios
        .get(
          `https://nuxt-blog-6aadc-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.id}.json`
        )
        .then((res) => {
          console.log(res.data)
          return {
            loadedPost: res.data,
          }
        })
    },
  }
</script>

<style lang="stylus" scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
