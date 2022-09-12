// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWdGisERHnQdQ1fvVe2tJtF7fGHE0zRaU",
  authDomain: "hotel-booking-system-50ec7.firebaseapp.com",
  projectId: "hotel-booking-system-50ec7",
  storageBucket: "hotel-booking-system-50ec7.appspot.com",
  messagingSenderId: "641083463531",
  appId: "1:641083463531:web:dc376f2e4960aab5865e2e",
  measurementId: "G-ZM2DKBLSZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
