import firebase from "firebase/app";

import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHWCNHWlxdaZo5uAMmvQW5yWhb8i21nqk",
  authDomain: "anonymous-148f6.firebaseapp.com",
  projectId: "anonymous-148f6",
  storageBucket: "anonymous-148f6.appspot.com",
  messagingSenderId: "58332719959",
  appId: "1:58332719959:web:50e7e76a02416ee4812c12",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

export default firebase;
