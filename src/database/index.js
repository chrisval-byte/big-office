import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage'

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.DOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
})

let db = firebase.firestore();
let storage = firebase.storage();

export const data = db
export const store = storage