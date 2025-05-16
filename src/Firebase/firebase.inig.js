// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUM9Nbx6GRtMGZI2Eo5v_P0u6qDiS14E0",
  authDomain: "coffee-store-app-857cc.firebaseapp.com",
  projectId: "coffee-store-app-857cc",
  storageBucket: "coffee-store-app-857cc.firebasestorage.app",
  messagingSenderId: "893046611271",
  appId: "1:893046611271:web:76bf2a1f4009c7799b0062",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
