import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";

let Login = (props) => {

    

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //if login-> user info
      //if logout-> user = null
      if (user) {
        let { displayName, email } = user;
        console.log(user);

        props.handleUser({ displayName, email });
      } else {
        props.handleUser(user);
      }
    });
  }, []);



  return (
    <div>
      {props.user ? <Redirect to="/home" /> : ""}

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
