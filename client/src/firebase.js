// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a672f.firebaseapp.com",
  projectId: "real-estate-a672f",
  storageBucket: "real-estate-a672f.appspot.com",
  messagingSenderId: "126176200753",
  appId: "1:126176200753:web:7bd5aca1dce8e89ea82d10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

