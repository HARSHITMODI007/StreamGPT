// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWDhmpnmX8--laZI7tCspKBZfoh869FKA",
  authDomain: "streamgpt-54301.firebaseapp.com",
  projectId: "streamgpt-54301",
  storageBucket: "streamgpt-54301.appspot.com",
  messagingSenderId: "18721401318",
  appId: "1:18721401318:web:f5c482ad4e668eca340e27",
  measurementId: "G-PHJXS6STZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()