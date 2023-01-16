import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
    apiKey: "AIzaSyBUNxFd3n9mykSdgVj9IJjdjJz07dn8Bcs",
  authDomain: "messenger-clone-89.firebaseapp.com",
  projectId: "messenger-clone-89",
  storageBucket: "messenger-clone-89.appspot.com",
  messagingSenderId: "755159161137",
  appId: "1:755159161137:web:cad5b651d36c3bc1c1b810",
  measurementId: "G-YYTH340FTM"
})

const db = firebaseApp.firestore()

export default db





