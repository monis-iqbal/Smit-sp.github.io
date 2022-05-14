import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkf57We6GvrhUh1sNs6K_kNJ5XKZgSNVM",
  authDomain: "smit-sp.firebaseapp.com",
  projectId: "smit-sp",
  storageBucket: "smit-sp.appspot.com",
  messagingSenderId: "20414598852",
  appId: "1:20414598852:web:1b0d3975cfac9c8ef0c391",
  measurementId: "G-D3ZEGREZD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export  {app , auth};