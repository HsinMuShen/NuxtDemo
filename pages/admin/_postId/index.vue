<template lang="pug">
  .admin-post-page
    section.update-form
      admin-post-form(:post='loadedPost', @submit='onSubmitted')
</template>

<script>
  import axios from 'axios'
  import AdminPostForm from '~/components/Admin/AdminPostForm'
  console.log(111)
  export default {
    components: {
      AdminPostForm,
    },
    asyncData(context) {
      return axios
        .get(
          `https://nuxt-blog-6aadc-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.postId}.json`
        )
        .then((res) => {
          return {
            loadedPost: { ...res.data, id: context.params.postId },
          }
        })
    },
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('updatePost', postData).then(() => {
          console.log('updated', postData)
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
