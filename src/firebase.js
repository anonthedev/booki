// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzoSpSv23WanFev_RPXUg1NzyafYc8yCg",
  authDomain: "booki-29f51.firebaseapp.com",
  projectId: "booki-29f51",
  storageBucket: "booki-29f51.appspot.com",
  messagingSenderId: "39829218323",
  appId: "1:39829218323:web:872f09148b430f96ac0be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider, signInWithPopup, GoogleAuthProvider}