export default {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPosts(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex((post) => post.id === editedPost.id)
    state.loadedPosts[postIndex] = editedPost
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
}
