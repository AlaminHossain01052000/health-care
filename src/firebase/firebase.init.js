import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyDhjiKSzTooWKrJHEj8E4i6k0rMchHgvMM",
    authDomain: "health-care-c20dd.firebaseapp.com",
    projectId: "health-care-c20dd",
    storageBucket: "health-care-c20dd.appspot.com",
    messagingSenderId: "679944144182",
    appId: "1:679944144182:web:40b100333556fd3b14df97",
    measurementId: "G-SGLR2GH073"
  };
const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}

// Initialize Firebase
export default initializeFirebase;