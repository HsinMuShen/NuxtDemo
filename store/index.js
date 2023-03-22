import { Store } from 'vuex'
import axios from 'axios'

console.log(1111)

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
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
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-blog-6aadc-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
          .then((res) => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch((err) => context.error(err))
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
        }
        return axios
          .post('https://nuxt-blog-6aadc-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', createdPost)
          .then((res) => {
            vuexContext.commit('addPosts', { ...createdPost, id: res.data.name })
          })
          .catch((err) => console.log(err))
      },
      updatePost(vuexContext, editedPost) {
        return axios
          .put(
            `https://nuxt-blog-6aadc-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${editedPost.id}.json`,
            editedPost
          )
          .then((res) => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch((err) => console.log(err))
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts(state) {
        console.log(11111111)
        return state.loadedPosts
      },
    },
  })
}

export default createStore
