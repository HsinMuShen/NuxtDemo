<template lang="pug">
  .featured-posts
    post-preview(id= '1', 
    :is-admin='isAdmin'
    thumbnail='https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
    title='hello!',
    previewText='the first post!')
</template>

<script>
  import PostPreview from '~/components/Posts/PostPreview.vue'
  export default {
    components: {
      PostPreview,
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
