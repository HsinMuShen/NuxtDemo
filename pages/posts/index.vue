<template lang="pug">
  .post-pages
    post-list(:posts='loadedPosts')
</template>

<script>
  export default {
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .post-pages
    display flex
    justify-content center
    align-items center
</style>
