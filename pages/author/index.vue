<template lang="pug">
  div
    upload-author(@authorSubmit="refreshAuthors")
    authorsList(:authors="authors")
</template>

<script>
  import { computed, useAsync, useStore } from '@nuxtjs/composition-api'
  import uploadAuthor from '~/components/author/upload-author'
  import authorsList from '~/components/author/authors-list'

  export default {
    components: {
      uploadAuthor,
      authorsList,
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
