import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/plugins/firebase'

const namespaced = true

const state = () => ({
  authors: [],
})

const mutations = {
  setAuthors(state, authors) {
    state.authors = authors
  },
}

const actions = {
  async fetchAuthors({ commit }) {
    try {
      const authorsCollection = collection(db, 'authors')
      const docSnap = await getDocs(authorsCollection)
      const authors = []
      docSnap.docs.forEach((doc) => {
        const authorData = {
          id: doc.id,
          ...doc.data(),
        }
        authors.push(authorData)
      })
      commit('setAuthors', authors)
    } catch (error) {
      console.error('Error fetching authors:', error)
    }
  },
}

const getters = {
  getAuthorById: (state) => (id) => {
    return state.authors.find((author) => author.id === id)
  },
  getAuthors: (state) => {
    return state.authors
  },
}

export default { namespaced, state, mutations, actions, getters }
