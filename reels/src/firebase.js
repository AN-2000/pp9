import firebase from "firebase/app";

import "firebase/firestore";

//Step 1
import "firebase/auth";

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

//Step 2
export const auth = firebase.auth();

//Step 3=> firebase console; enable google login in auth panel

//Step 4
let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
