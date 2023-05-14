import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../plugins/firebase'

export async function addData(dbName, data) {
  try {
    const docRef = await addDoc(collection(db, dbName), data)

    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
