// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN-2RX1b6Sm9ZbxILCIFOSickp7s9OZNE",
  authDomain: "learningnextfirebase.firebaseapp.com",
  projectId: "learningnextfirebase",
  storageBucket: "learningnextfirebase.appspot.com",
  messagingSenderId: "327632677188",
  appId: "1:327632677188:web:49234847229f1376d64f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app