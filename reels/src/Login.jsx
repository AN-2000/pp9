import { useEffect } from "react";
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
    <button
      onClick={signInWithGoogle}
      type="submit"
      className="btn btn-primary m-4"
    >
      Login With Google
    </button>
  );
};

export default Login;
