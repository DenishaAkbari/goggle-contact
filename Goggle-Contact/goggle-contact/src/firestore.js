// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt8FTdFrqTNbmVb4hdcY5tLprVPMUkS6w",
  authDomain: "goggle-contact-6b1aa.firebaseapp.com",
  projectId: "goggle-contact-6b1aa",
  storageBucket: "goggle-contact-6b1aa.firebasestorage.app",
  messagingSenderId: "942845945315",
  appId: "1:942845945315:web:64a79fdce455b31a1e2cd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);