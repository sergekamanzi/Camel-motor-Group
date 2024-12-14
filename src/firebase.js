// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA20kQ0eiehMRoPo4hB953ZZMZnRS4_BeE",
    authDomain: "camel-group.firebaseapp.com",
    projectId: "camel-group",
    storageBucket: "camel-group.firebasestorage.app",
    messagingSenderId: "120030420911",
    appId: "1:120030420911:web:27132320e4794e4674195a"
  };

const app = initializeApp(firebaseConfig);

// Firestore (Database)
export const db = getFirestore(app);

export { collection, addDoc };

