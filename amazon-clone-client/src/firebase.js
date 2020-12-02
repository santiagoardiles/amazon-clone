/*    Firebase configuration.    */

// Setup.
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional.
const firebaseConfig = {
  apiKey: "AIzaSyAb6DVj5tGXTAFkRda9C4NDVLjy5_dHyDU",
  authDomain: "clone-jr.firebaseapp.com",
  databaseURL: "https://clone-jr.firebaseio.com",
  projectId: "clone-jr",
  storageBucket: "clone-jr.appspot.com",
  messagingSenderId: "57910462432",
  appId: "1:57910462432:web:44dba80f51283f5d0dcd85",
  measurementId: "G-VG22GZ4G5V",
};

// Initialisation.
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database.
const db = firebaseApp.firestore();

// Authentication.
const auth = firebase.auth();

export { db, auth };
