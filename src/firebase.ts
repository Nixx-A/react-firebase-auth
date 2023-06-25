import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANc5tU6oCARyKd1PLZaMn1PiptpYQhi6w",
  authDomain: "react-fb-auth-b4f6b.firebaseapp.com",
  projectId: "react-fb-auth-b4f6b",
  storageBucket: "react-fb-auth-b4f6b.appspot.com",
  messagingSenderId: "412724900873",
  appId: "1:412724900873:web:54a9674f20d9778a7cb4d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)