// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHNAF2qpHc7sJ7IckP2VLa-oGUaQnT4ZY",
  authDomain: "fir-2-e3c66.firebaseapp.com",
  projectId: "fir-2-e3c66",
  storageBucket: "fir-2-e3c66.appspot.com",
  messagingSenderId: "79201920791",
  appId: "1:79201920791:web:d94081251f2c65ab513952",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
