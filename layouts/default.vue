<template lang="pug">
div
  header header
  nuxt
</template>

<script>
  export default {
    data() {
      return {
        userId: '',
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userId)
      },
    },
  }
</script>

<style lang="stylus">
  html
    font-family 'Open Sans', sans-serif
  body
    margin 0
</style>
