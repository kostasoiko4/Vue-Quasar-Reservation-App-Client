// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/auth"
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMT01drehkCN29rucqLbzTUwQjpvBO7c4",
  authDomain: "coffeehack-653b9.firebaseapp.com",
  projectId: "coffeehack-653b9",
  storageBucket: "coffeehack-653b9.appspot.com",
  messagingSenderId: "794166474138",
  appId: "1:794166474138:web:c8dfcc6c32892027bbf623",
  measurementId: "G-ZRQ3XV62TQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth;
const firebaseDB = firebaseApp.database;

export {firebaseAuth, firebaseDB}