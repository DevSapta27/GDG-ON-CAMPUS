// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5aYg1cYRDWKgeXUhHeYEy9LlaBRihMyk",
  authDomain: "gdg-on-campus-34f7d.firebaseapp.com",
  projectId: "gdg-on-campus-34f7d",
  storageBucket: "gdg-on-campus-34f7d.appspot.com",
  messagingSenderId: "952254355181",
  appId: "1:952254355181:web:9c215bfeba303c4c251ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;