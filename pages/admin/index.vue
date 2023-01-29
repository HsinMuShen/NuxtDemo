<template lang="pug">
  .admin-page
    section.new-post
      app-button(@click='$router.push("/admin/new_post")') New Post
    section.existing-posts
      h1 Existing Posts
      post-list(isAdmin)
</template>

<script>
  import PostList from '~/components/Posts/PostList.vue'
  import AppButton from '~/components/UI/AppButton'
  export default {
    components: {
      PostList,
      AppButton,
    },
  }
</script>

<style lang="stylus" scoped>
  .admin-page
    padding 20px
  .new-post
    text-align center
    border-bottom 2px solid #ccc
    padding-bottom 10px
  .existing-posts h1
    text-align center
</style>
