import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxZ-56RROTr4j33OvFiYuAI0UbN8gZgwM",
  authDomain: "aliexpress-9f62f.firebaseapp.com",
  projectId: "aliexpress-9f62f",
  storageBucket: "aliexpress-9f62f.firebaseapp.com",
  messagingSenderId: "901620841984",
  appId: "1:901620841984:web:b4439dfd8cf5633ae9e2e5",
  measurementId: "G-8T9HG9V0ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
