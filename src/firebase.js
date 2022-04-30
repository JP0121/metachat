import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAmPny4rFWT9RlTPy7AEpjrziX9aa-YxYQ",
    authDomain: "metachat-58b1b.firebaseapp.com",
    projectId: "metachat-58b1b",
    storageBucket: "metachat-58b1b.appspot.com",
    messagingSenderId: "617395663407",
    appId: "1:617395663407:web:734fe8fa25e828ab4b4cda",
    measurementId: "G-DRH4MDGDFY"
  }).auth();



  