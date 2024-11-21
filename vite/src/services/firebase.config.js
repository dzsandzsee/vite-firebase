// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn0aosMdwSmWzfl3PcYlCdCzCZPrD8kQg",
  authDomain: "react-firebase-36aca.firebaseapp.com",
  projectId: "react-firebase-36aca",
  storageBucket: "react-firebase-36aca.firebasestorage.app",
  messagingSenderId: "1095456054868",
  appId: "1:1095456054868:web:c9140488134c5fdf1f97c1",
  measurementId: "G-6QF240Q3E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);