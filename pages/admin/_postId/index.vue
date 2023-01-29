<template lang="pug">
  .admin-post-page
    section.update-form
      admin-post-form(:post='loadedPost')
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    components: {
      AdminPostForm,
    },
    data() {
      return {
        loadedPost: {
          author: 'Michael',
          title: 'the best',
          thumbnailLink:
            'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
          content: 'hihihi',
        },
      }
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
