import firebase from "firebase/app";
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyA810T5hlguJGqHNIbaJ3btiyIXT1jb1cI",
    authDomain: "big-office-86197.firebaseapp.com",
    projectId: "big-office-86197",
    storageBucket: "big-office-86197.appspot.com",
    messagingSenderId: "826107610529",
    appId: "1:826107610529:web:7a4a301de7e656f0e337e0",
    measurementId: "G-SFQYJ6DC5Q"
})

let db = firebase.firestore();

export default db