<template lang="pug">
  form(@submit.prevent="onSubmit",:class='$style["upload-author-container"]')
    div
      app-image-input(@onChange="handleImageUpload", :imageSrc="editedAuthor.profileImage")
      app-control-input(v-model="editedAuthor.name", placeholder="姓名",:class='$style["name-input"]')
    app-button(type="submit") Submit
</template>

<script>
  import { ref } from '@nuxtjs/composition-api'
  import { uploadImage } from '~/utils/firebase/upload-image'

  export default {
    setup() {
      const editedAuthor = ref({
        name: '',
        profileImage: '',
      })
      const handleImageUpload = async (event) => {
        const file = event.target.files[0]
        try {
          const imageUrl = await uploadImage(file)
          editedAuthor.value.profileImage = imageUrl
        } catch (error) {
          console.error('Error uploading image: ', error)
        }
      }
      const onSubmit = () => {
        if (!editedAuthor.value.name) {
          alert('Please enter an author name')
          return
        }
        // upload author to firebase db
        console.log('Author: ', editedAuthor.value)
      }
      return {
        editedAuthor,
        handleImageUpload,
        onSubmit,
      }
    },
  }
</script>

<style lang="stylus" module>
  .upload-author-container
    display flex
    justify-content center
    align-items center

  .upload-image-container
    position relative
    display flex
    justify-content center
    align-items center
    border 1px solid #000000
    width 100px
    height 100px
    border-radius 50%

  .upload-image-input-file
    opacity 0
    position absolute
    z-index 2
    cursor pointer
    width 100%
    height 100%
    border-radius 50%

  .upload-image-icon
    z-index 2
    cursor pointer
    width 10px
    height 10px

  .upload-image
    position absolute
    width 100%
    height 100%
    border-radius 50%

  .name-input
    width 100px
</style>
