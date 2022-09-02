import { initializeApp } from 'firebase/app'
import { getDatabase, onValue, query, ref, remove, update } from 'firebase/database'
import { getPerformance } from 'firebase/performance'
import { DataType, getTableList } from '../features/table/slice'
import { store } from './store'

const firebaseConfig = {
  apiKey: 'AIzaSyDsfm5lQhmydlrpz-SryxvBDfeqG3X4gBc',
  authDomain: 'my-first-firebase-projec-7ca56.firebaseapp.com',
  databaseURL:
    'https://my-first-firebase-projec-7ca56-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'my-first-firebase-projec-7ca56',
  storageBucket: 'my-first-firebase-projec-7ca56.appspot.com',
  messagingSenderId: '24381316344',
  appId: '1:24381316344:web:3e28cc1bf72d59a0e1ef0d',
  measurementId: 'G-YPFVWJEBVR',
}

const app = initializeApp(firebaseConfig)
getPerformance(app)
const db = getDatabase(app)
const rootUserRef = query(ref(db, 'root/user'))

// read realtime DB
export const getUserList = () => {
  onValue(rootUserRef, (snapshot) => {
    const rawData = snapshot.val() || {}
    store.dispatch(getTableList(rawData))
  })
}

// update realtime DB
export const updateUserItem = (updateData: {
  key: number | undefined
  name: string
  age: number
}) => {
  const postData: DataType = {
    key: updateData.key,
    name: updateData.name,
    age: updateData.age,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cute', 'cat'],
  }

  const updates: Record<string, DataType> = {}
  updates['root/user/' + `${Number(postData.key) - 1}`] = postData
  update(ref(db), updates)
}

// delete realtime DB
export const deleteUserItem = (key: number) => {
  remove(ref(db, `root/user/${key - 1}`))
}
