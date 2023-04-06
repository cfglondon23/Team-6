// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "cfg-team-6.firebaseapp.com",
  projectId: "cfg-team-6",
  storageBucket: "cfg-team-6.appspot.com",
  messagingSenderId: "116818881955",
  appId: "1:116818881955:web:c898fd12f56b513b94fe16",
  measurementId: "G-7J8XTNHNNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);