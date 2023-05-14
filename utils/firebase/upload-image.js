import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '~/plugins/firebase'

export async function uploadImage(file) {
  if (!file) return

  const imageRef = ref(storage, `images/${file.name}`)
  try {
    const snapshot = await uploadBytesResumable(imageRef, file)
    const imageUrl = await getDownloadURL(snapshot.ref)
    return imageUrl
  } catch (error) {
    console.error('Error uploading image: ', error)
    throw error
  }
}
