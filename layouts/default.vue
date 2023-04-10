<template lang="pug">
  div
    TheHeader(@sidenavToggle='disPlaySidenav = !disPlaySidenav')
    TheSidenav(:show='disPlaySidenav', @close="disPlaySidenav=false")
    nuxt
</template>

<script>
  import TheHeader from '~/components/Navigation/TheHeader'
  import TheSidenav from '~/components/Navigation/TheSidenav'
  export default {
    middleware: 'log',
    components: {
      TheHeader,
      TheSidenav,
    },
    data() {
      return {
        disPlaySidenav: false,
      }
    },
  }
</script>

<style lang="stylus">
  html
    font-family 'Open Sans', sans-serif
  body
    margin 0
</style>
