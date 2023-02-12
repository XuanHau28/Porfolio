// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGbq9iVjo5Jb2sdrLqZ7yIyQNETQD5Wzc",
  authDomain: "react-porfolio-f0f57.firebaseapp.com",
  projectId: "react-porfolio-f0f57",
  storageBucket: "react-porfolio-f0f57.appspot.com",
  messagingSenderId: "337214509768",
  appId: "1:337214509768:web:9457cb270821ce0224cbfd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();