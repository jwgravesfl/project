// src/firebase.js
import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDFjIqmF3bp4IUYLvvkXKkZIYBrpxBXySQ",
    authDomain: "contactform-8db42.firebaseapp.com",
    databaseURL: "https://contactform-8db42.firebaseio.com",
    projectId: "contactform-8db42",
    storageBucket: "contactform-8db42.appspot.com",
    messagingSenderId: "440563244508"
  };
firebase.initializeApp(config);

export default firebase;