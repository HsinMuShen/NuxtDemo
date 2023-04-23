<template lang="pug">
  .admin-page
    section.new-post
      app-button(@click='$router.push("/admin/new_post")') New Post
      app-button(@click='onLogout') Logout
    section.existing-posts
      h1 Existing Posts
      post-list(:posts='loadedPosts',isAdmin)
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      },
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
        this.$router.push('/admin/auth')
      },
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
