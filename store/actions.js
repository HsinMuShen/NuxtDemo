import Cookie from 'js-cookie'
import axios from 'axios'

export default {
  nuxtServerInit(vuexContext, context) {
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
      .post(process.env.baseUrl + '/posts.json?auth=' + vuexContext.state.token, createdPost)
      .then((res) => {
        vuexContext.commit('addPosts', { ...createdPost, id: res.data.name })
      })
      .catch((err) => console.log(err))
  },
  updatePost(vuexContext, editedPost) {
    return axios
      .put(process.env.baseUrl + `/posts/${editedPost.id}.json?auth=` + vuexContext.state.token, editedPost)
      .then((res) => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch((err) => console.log(err))
  },
  setPosts(context, posts) {
    context.commit('setPosts', posts)
  },
  authenticateUser(vuexContext, authData) {
    let authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.APIKey
    if (!authData.isLogin) {
      authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.APIKey
    }
    return axios
      .post(authURL, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((res) => {
        vuexContext.commit('setToken', res.data.idToken)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000)
        Cookie.set('jwt', res.data.idToken)
        Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000)
        return axios.post('http://localhost:3000/api/track/data', { data: 'Authenticated!' })
      })
      .catch((err) => {
        console.log(err)
      })
  },

  initAuth(vuexContext, req) {
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) return
      const jwtCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith('jwt='))
      if (!jwtCookie) return
      token = jwtCookie.split('=')[1]

      expirationDate = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else if (process.client) {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }

    if (new Date().getTime() > +expirationDate || !token) {
      vuexContext.dispatch('logout')
      return
    }
    vuexContext.commit('setToken', token)
  },
  logout(vuexContext) {
    vuexContext.commit('clearToken')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
  },
  log() {
    console.log(11111)
  },
}
