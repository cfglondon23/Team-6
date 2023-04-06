// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "cfg-team-6.firebaseapp.com",
  projectId: "cfg-team-6",
  storageBucket: "cfg-team-6.appspot.com",
  messagingSenderId: "116818881955",
  appId: "1:116818881955:web:d754b3803799c95894fe16",
  measurementId: "G-749698PW6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);

export { db, auth };

