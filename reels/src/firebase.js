import firebase from "firebase/app";

import "firebase/firestore";

//Step 1
import "firebase/auth"

let firebaseConfig = {
  apiKey: "AIzaSyDatqXnL5Xnni4kooClgQKcSS7QefIpR4I",
  authDomain: "reels-95c75.firebaseapp.com",
  projectId: "reels-95c75",
  storageBucket: "reels-95c75.appspot.com",
  messagingSenderId: "1073425047236",
  appId: "1:1073425047236:web:baf29db05bfc92ad193391",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

//Step 2
export const auth = firebase.auth()

//Step 3=> firebase console; enable google login in auth panel

//Step 4
let provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)


export default firebase;
