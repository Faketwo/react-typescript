import { initializeApp } from 'firebase/app'
import { getDatabase, onValue, query, ref, update } from 'firebase/database'
import { getTableList } from '../features/table/slice'
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
export const updateUserList = () => {
  // 模擬update資料
  const postData = {
    key: 3,
    name: 'Joe White YA',
    age: 12,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }

  const updates: Record<string, any> = {}
  updates['root/user/' + `${postData.key - 1}`] = postData
  update(ref(db), updates)
}

// 覆蓋式寫入
// set(dbRef, {
//   username: 'jiaer',
//   email: 'jiaer@ckex',
//   profile_picture: 'jiaer.jpg',
// })
