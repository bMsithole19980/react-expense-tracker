// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyC3AQQhJO0Z5HZjWSwtbT9q5FNwlNC3Rq8",
  authDomain: "expense-tracker-624cd.firebaseapp.com",
  projectId: "expense-tracker-624cd",
  storageBucket: "expense-tracker-624cd.appspot.com",
  messagingSenderId: "203060174312",
  appId: "1:203060174312:web:df18c0dd7f3fdcca2b985d",
  measurementId: "G-X6T8F01D6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);

export {db ,auth}