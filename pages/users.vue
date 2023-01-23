<template lang="pug">
div
  input(type="text", v-model="userId")
  button(@click="onLoadUser") Load user
  nuxt-child
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
