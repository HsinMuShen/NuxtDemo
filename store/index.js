import { Store } from 'vuex'
import axios from 'axios'
console.log(11111111111101)

async function generateResponse(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        prompt,
        max_tokens: 1024,
        temperature: 0.5,
        model: 'text-davinci-003',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    )

    console.log(response.data.choices[0].text)
  } catch (error) {
    console.log(error.response.data)
  }
}

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
        generateResponse('what is the meaning if life?')
        return axios
          .get(process.env.baseUrl + '/posts.json')
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
          .post(process.env.baseUrl + '/posts.json', createdPost)
          .then((res) => {
            vuexContext.commit('addPosts', { ...createdPost, id: res.data.name })
          })
          .catch((err) => console.log(err))
      },
      updatePost(vuexContext, editedPost) {
        return axios
          .put(process.env.baseUrl + `/posts/${editedPost.id}.json`, editedPost)
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
        return state.loadedPosts
      },
    },
  })
}

export default createStore
