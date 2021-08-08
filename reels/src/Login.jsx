import { useContext } from "react";
import { Redirect } from "react-router-dom";
import {  signInWithGoogle } from "./firebase";

import { AuthContext } from "./AuthProvider";

let Login = () => {
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
