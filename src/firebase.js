/* import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider) */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6n70reQDFNAD6ReBTt7tnxRwUaC7uRc",
  authDomain: "portfolio-d2c96.firebaseapp.com",
  projectId: "portfolio-d2c96",
  storageBucket: "portfolio-d2c96.appspot.com",
  messagingSenderId: "581583438453",
  appId: "1:581583438453:web:242d55d1cc71de824aee3c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider)