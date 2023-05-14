<template lang="pug">
  div(:class='$style["authors-container"]')
    div(v-for="author in authors" :key="author.id",:class='$style["author-container"]')
      img(:src="author.profileImage", alt="author.name", :class='$style["author-image"]')
      p {{ author.name }}
</template>

<script>
  // import { ref } from '@nuxtjs/composition-api'

  export default {
    props: {
      authors: {
        type: Array,
        required: true,
      },
    },
    setup() {},
  }
</script>

<style lang="stylus" module>
  $size = 120px
  .authors-container
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
  .author-container
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin 20px
  .author-image
    width $size
    height $size
    border-radius 50%
</style>
