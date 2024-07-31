
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbB2hj1xsKZYv60IEmuKFvFfvr8u5l7qU",
  authDomain: "adddocs-ca8ef.firebaseapp.com",
  projectId: "adddocs-ca8ef",
  storageBucket: "adddocs-ca8ef.appspot.com",
  messagingSenderId: "144176698271",
  appId: "1:144176698271:web:f8a93b11ae90e0238d63aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, getDocs, doc, onSnapshot };
