// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-ch0Jg0V4xu9bIPC7r0hdvI1fSmJFoI",
  authDomain: "photofolio-2f578.firebaseapp.com",
  projectId: "photofolio-2f578",
  storageBucket: "photofolio-2f578.appspot.com",
  messagingSenderId: "246404625819",
  appId: "1:246404625819:web:10e729ad2dbad484091d3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
