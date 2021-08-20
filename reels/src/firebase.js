import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXOqqRZU6cztD9CplKRnzzq7Krt27JO4U",
  authDomain: "reels-f182f.firebaseapp.com",
  projectId: "reels-f182f",
  storageBucket: "reels-f182f.appspot.com",
  messagingSenderId: "139583315351",
  appId: "1:139583315351:web:74ed2334f49421b96eb8d2",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()


let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
