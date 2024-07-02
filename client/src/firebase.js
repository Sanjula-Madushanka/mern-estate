// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4eb98.firebaseapp.com",
  projectId: "mern-estate-4eb98",
  storageBucket: "mern-estate-4eb98.appspot.com",
  messagingSenderId: "105396725277",
  appId: "1:105396725277:web:845a49c436f22f2c4d08f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);