import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle, firestore } from "./firebase";

import { AuthContext } from "./AuthProvider";

let Login = (props) => {
  let value = useContext(AuthContext);

  return (
    <div>
      {value ? <Redirect to="/home" /> : ""}

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
