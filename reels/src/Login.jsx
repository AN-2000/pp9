import { signInWithGoogle } from "./firebase";

let Login = () => {
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
