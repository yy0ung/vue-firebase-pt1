import { createApp } from 'vue'
import firebase from 'firebase/app'
import App from './App.vue'
import { firebaseConfig } from './firebaseConfig.js'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()



createApp(App).mount('#app')
