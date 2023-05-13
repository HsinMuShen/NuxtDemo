import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBEFVYqJF4gar7WrhscA9YDizWyRi9LBgI',
  authDomain: 'nuxt-blog-6aadc.firebaseapp.com',
  databaseURL: 'https://nuxt-blog-6aadc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'nuxt-blog-6aadc',
  storageBucket: 'nuxt-blog-6aadc.appspot.com',
  messagingSenderId: '393948837775',
  appId: '1:393948837775:web:54dd91669af8fe53257dfa',
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
