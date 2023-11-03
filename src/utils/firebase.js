// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-8c233.firebaseapp.com",
  projectId: "nextblog-8c233",
  storageBucket: "nextblog-8c233.appspot.com",
  messagingSenderId: "107557760659",
  appId: "1:107557760659:web:d88f1e92e28d2e70c92766",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
