// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-estate-pro-8c211.firebaseapp.com",
  projectId: "real-estate-pro-8c211",
  storageBucket: "real-estate-pro-8c211.appspot.com",
  messagingSenderId: "948887716157",
  appId: "1:948887716157:web:3db05cb943eba854fac554"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);