<template lang="pug">
  div
    upload-author(@authorSubmit="refreshAuthors")
    ul
      li(v-for="author in authors" :key="author.id") {{ author.name }}
</template>

<script>
  import { computed, useAsync, useStore } from '@nuxtjs/composition-api'
  import uploadAuthor from '../../../components/Admin/author/upload-author'

  export default {
    components: {
      uploadAuthor,
    },
    setup() {
      const { dispatch, getters } = useStore()
      const authors = useAsync(async () => {
        await dispatch('authors/fetchAuthors')
        const authorsFromGetter = computed(() => getters['authors/getAuthors'])
        return authorsFromGetter.value
      })
      const refreshAuthors = async () => {
        await dispatch('authors/fetchAuthors')
        authors.value = getters['authors/getAuthors']
      }
      return { authors, refreshAuthors }
    },
  }
</script>

<style lang="stylus" scoped></style>
