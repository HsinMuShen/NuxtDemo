<template lang="pug">
h1 a single user {{ $route.params.id }}
</template>

<script>
  export default {
    validate(data) {
      // console.log(data)
      return true
    },
  }
</script>
