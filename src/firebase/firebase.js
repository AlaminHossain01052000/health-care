import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhjiKSzTooWKrJHEj8E4i6k0rMchHgvMM",
  authDomain: "health-care-c20dd.firebaseapp.com",
  projectId: "health-care-c20dd",
  storageBucket: "health-care-c20dd.appspot.com",
  messagingSenderId: "679944144182",
  appId: "1:679944144182:web:40b100333556fd3b14df97",
  measurementId: "G-SGLR2GH073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export  {app,auth};