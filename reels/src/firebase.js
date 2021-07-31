import firebase from "firebase/app";

import "firebase/firestore";

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

export default firebase;
