// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz1Y78K2GxPOkbTrUho5CKyWMbYLBVDM8",
  authDomain: "portfolio-rk-31978.firebaseapp.com",
  projectId: "portfolio-rk-31978",
  storageBucket: "portfolio-rk-31978.firebasestorage.app",
  messagingSenderId: "246457332548",
  appId: "1:246457332548:web:c5181ae9925df58750dd11",
  measurementId: "G-W158CPRHRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);