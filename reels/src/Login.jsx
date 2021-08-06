import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle, firestore } from "./firebase";

import { userContext } from "./App";

let Login = (props) => {
  let value = useContext(userContext);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      //if login-> user info
      //if logout-> user = null
      if (user) {
        let { displayName, email, uid } = user;

        let docRef = firestore.collection("users").doc(uid);
        let document = await docRef.get();
        if (!document.exists) {
          docRef.set({
            displayName,
            email,
            posts: [],
          });
        }

        props.handleUser({ displayName, email, uid });
      } else {
        props.handleUser(user);
      }
    });
  }, []);

  return (
    <div>
      {value? <Redirect to="/home" /> : ""}

      <button
        onClick={signInWithGoogle}
        type="submit"
        className="btn btn-primary m-4"
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;
