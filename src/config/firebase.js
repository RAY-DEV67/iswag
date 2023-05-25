import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyA07P2olGu_PUpybV0rximbA5MRAqP4_UI",
  authDomain: "everything-soft.firebaseapp.com",
  projectId: "everything-soft",
  storageBucket: "everything-soft.appspot.com",
  messagingSenderId: "1063442662483",
  appId: "1:1063442662483:web:57844034955e2d4655b2a6",
  measurementId: "G-M1TV62SV35"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db


