<template lang="pug">
  .admin-new-post-page
    section.new-post-form
      admin-post-form(@submit='onSubmitted')
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    components: {
      AdminPostForm,
    },
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('addPost', postData).then(() => {
          this.$router.push('/admin')
        })
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .new-post-form
    width 90%
    margin 20px auto
  @media(min-width:768px){
    .new-post-form{
      width: 500px
    }
  }
</style>
