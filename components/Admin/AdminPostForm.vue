<template lang="pug">
  form(@submit.prevent='onSave')
    app-control-input(v-model="editedPost.author") Author Name 
    app-control-input(v-model="editedPost.title") Title
    app-control-input(v-model="editedPost.thumbnail") Thumbnail Link
    app-control-input(
      v-model="editedPost.content") Upload Image
    app-control-input(control-type="textarea",
      v-model="editedPost.content") Content
    app-control-input(control-type="textarea",
      v-model="editedPost.previewText") Preview Text
    app-button(type='submit') Save
    app-button(
      type="button",
      style="margin-left: 10px",
      btn-style="cancel",
      @click="onCancel") Cancel
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        require: false,
      },
    },
    data() {
      return {
        editedPost: this.post
          ? { ...this.post }
          : {
              author: '',
              title: '',
              thumbnail: '',
              content: '',
              previewText: '',
            },
      }
    },
    methods: {
      onSave() {
        this.$emit('submit', this.editedPost)
      },
      onCancel() {
        this.$router.push('/admin')
      },
    },
  }
</script>
