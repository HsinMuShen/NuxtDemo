<template lang="pug">
  div(:class='$style["header-container"]')
    header(:class='$style["the-header"]')
      nuxt-link(to="/",:class='$style["header-banner"]')
        div(:class='$style["header-banner-left"]')
          div(:class='$style["header-banner-left-top"]')
          div(:class='$style["header-banner-left-bottom"]')
        div(:class='$style["header-banner-right"]')
      //- the-side-nav-toggle(@toggle="$emit('sidenavToggle')")
      div(:class='$style["navigation-items"]')
        ul(:class='$style["nav-list"]')
          li(:class='$style["nav-item"]')
            nuxt-link(to="/posts") 首頁
          li(:class='$style["nav-item"]')
            nuxt-link(to="/posts") 畢業設計
          li(:class='$style["nav-item"]')
            nuxt-link(to="/about") 關於我們
          li(:class='$style["nav-item"]')
            nuxt-link(to="/admin") 管理員系統
</template>

<script>
  import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

  export default {
    name: 'TheHeader',
    components: {
      TheSideNavToggle,
    },
  }
</script>

<style lang="stylus" module>
  $header-height = 200px
  $banner-height = 150px
  $banner-content-margin = 15px
  $tabelt-width = 600px
  $mobile-width = 450px

  .header-container
    height $header-height
    @media (max-width: $mobile-width)
      height 120px

  .the-header
    width 100%
    position fixed
    height $header-height
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    background-color white
    z-index 100
    box-sizing border-box
    @media (max-width: $mobile-width)
      height 120px

  .header-banner
    background-color #c31f1e
    height $banner-height
    width 100%
    display flex
    justify-content space-between
    @media (max-width: $mobile-width)
      height 70px

  .header-banner-left
    display flex
    flex-direction column
    justify-content space-between
    margin $banner-content-margin

  .header-banner-left-top
    background-image url('~static/header/left_top.png')
    width 246px
    height 40px

  .header-banner-left-bottom
    background-image url('~static/header/left_bottom.png')
    width 344px
    height 10px
    @media (max-width: $mobile-width)
      display none

  .header-banner-right
    background-image url('~static/header/right.png')
    width 172px
    height ($banner-height - $banner-content-margin * 2)
    background-size contain
    background-repeat no-repeat
    background-position bottom
    margin $banner-content-margin
    @media (max-width: $tabelt-width)
      display none

  .navigation-items
    width 100%
    border-bottom 1px solid #bcbcbc

  @media (min-width: 768px)
    .navigation-items
      display block

  .nav-list
    list-style none
    padding 0
    margin 0
    display flex
    justify-content flex-start

  .nav-item
    padding 0 10px
    font-size 14px
    font-weight bold
    height 50px
    display flex
    justify-items center
    align-items center

  .nav-item a
    text-decoration none
    color black

  .nav-item a:hover,
  .nav-item a:active,
  .nav-item a.nuxt-link-active
    color #c31f1e
</style>
