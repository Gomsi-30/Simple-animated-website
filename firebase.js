// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyDxvw0AD2P0nmqGp7b-EgcZ9-8PYT2J3ws",
  authDomain: "learning-ee744.firebaseapp.com",
  projectId: "learning-ee744",
  storageBucket: "learning-ee744.appspot.com",
  messagingSenderId: "31154586130",
  appId: "1:31154586130:web:2e23258da08d0042930ecb",
  measurementId: "G-X3SRMHW3HP"
};

// Initialize Firebase
const app = initializeApp(firebase);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };