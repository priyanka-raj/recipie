 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwOoVZbcmVOjzrOn32V0SqtHy9fz5t4_I",
  authDomain: "it354recipie.firebaseapp.com",
  projectId: "it354recipie",
  storageBucket: "it354recipie.appspot.com",
  messagingSenderId: "1097164691447",
  appId: "1:1097164691447:web:6acff935cdac739f8d80f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }