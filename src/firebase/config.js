// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBblLWnIzsA5f7f31jnZui9YK7lvvkJVwE",
  authDomain: "auth-999d2.firebaseapp.com",
  projectId: "auth-999d2",
  storageBucket: "auth-999d2.appspot.com",
  messagingSenderId: "271881835117",
  appId: "1:271881835117:web:887f882520fba268ace564",
  measurementId: "G-J2CEPMMLDT"
};


// Initialize Firebase (

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export { firebase, authentication };