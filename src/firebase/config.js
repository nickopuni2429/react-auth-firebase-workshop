// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAySggx5Fa6sdKiz472Fp3ecY6sZalQhGk",
  authDomain: "authentication-3e799.firebaseapp.com",
  projectId: "authentication-3e799",
  storageBucket: "authentication-3e799.appspot.com",
  messagingSenderId: "31614581737",
  appId: "1:31614581737:web:6959ec0413a918d99aa978",
  measurementId: "G-L3VJYBP4L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);