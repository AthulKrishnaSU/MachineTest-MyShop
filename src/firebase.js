// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf7B6k7ZlXtbzUgQXtzhJN18lhsPlB4_Q",
  authDomain: "my-shop-2cee0.firebaseapp.com",
  projectId: "my-shop-2cee0",
  storageBucket: "my-shop-2cee0.firebasestorage.app",
  messagingSenderId: "30792691924",
  appId: "1:30792691924:web:1982e9e93bb5c76a23cb41",
  measurementId: "G-G2KQT0MSHZ"
};

const app = initializeApp(firebaseConfig);

// 🔥 ADD THIS
export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
