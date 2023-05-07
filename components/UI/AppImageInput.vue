<template lang="pug">
  div(:class='$style["upload-image-container"]')
    font-awesome-icon(icon="plus" :class='$style["upload-image-icon"]')
    img(v-if="imageSrc" :src="imageSrc",:class='$style["upload-image"]', alt="Author Image Preview")
    input(type="file", @change="$emit('onChange', $event)", :class='$style["upload-image-input-file"]')/
</template>

<script>
  export default {
    props: {
      imageSrc: String,
    },
    setup() {},
  }
</script>

<style lang="stylus" module>
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
</style>
