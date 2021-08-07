import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDutCMw3Jfb5iXv5bReh3dpaoz2e_zSxDA",
  authDomain: "test-e3a5c.firebaseapp.com",
  projectId: "test-e3a5c",
  storageBucket: "test-e3a5c.appspot.com",
  messagingSenderId: "357000282339",
  appId: "1:357000282339:web:7cbd2ca7ddc6e175eb85d6",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()


let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
