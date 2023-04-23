<template lang="pug">
  .admin-post-page
    section.update-form
      admin-post-form(:post='loadedPost', @submit='onSubmitted')
</template>

<script>
  import axios from 'axios'
  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    components: {
      AdminPostForm,
    },
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    asyncData(context) {
      return axios.get(process.env.baseUrl + `/posts/${context.params.postId}.json`).then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        }
      })
    },
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('updatePost', postData).then(() => {
          this.$router.push('/admin')
        })
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .update-form
    width 90%
    margin 20px auto
  @media(min-width:768px){
    .update-form{
      width: 500px
    }
  }
</style>
