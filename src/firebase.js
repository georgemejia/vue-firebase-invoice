import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "vue-firebase-invoice.firebaseapp.com",
  projectId: "vue-firebase-invoice",
  storageBucket: "vue-firebase-invoice.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export { auth, db }