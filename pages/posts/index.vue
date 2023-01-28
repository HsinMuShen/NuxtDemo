<template lang="pug">
  .post-pages
    post-list
</template>

<script>
  import PostList from '~/components/Posts/PostList.vue'
  export default {
    components: {
      PostList,
    },
  }
</script>

<style lang="stylus" scoped>
  .post-pages
    display flex
    justify-content center
    align-items center
</style>
