// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1db58.firebaseapp.com",
  projectId: "mern-estate-1db58",
  storageBucket: "mern-estate-1db58.appspot.com",
  messagingSenderId: "873849707202",
  appId: "1:873849707202:web:92b631c4b6b879b999795b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);