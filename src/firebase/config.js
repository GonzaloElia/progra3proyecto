import { app } from 'firebase/app'
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyChpeY8w8gHgEKqJlYz-0yX54BZ4NXfQb0",
    authDomain: "proyectodos-fbdd0.firebaseapp.com",
    projectId: "proyectodos-fbdd0",
    storageBucket: "proyectodos-fbdd0.appspot.com",
    messagingSenderId: "798161837479",
    appId: "1:798161837479:web:6862f95ec87f9e5e1f6a82"
  };


  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const storage = app.storage()
  export const db = app.firestore()