import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

let SignUp = () => {
  let user = useSelector((state) => state.user);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      {user ? <Redirect to="/" /> : ""}
      <div className="row">
        <div className="col-4">
          <form className="m-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.currentTarget.value);
                }}
                type="password"
                class="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (password == confirmPassword) {
                  auth.createUserWithEmailAndPassword(email, password);
                } else {
                  alert("Please check password entered");
                }
              }}
              type="submit"
              class="btn btn-primary"
            >
              Sign Up!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
