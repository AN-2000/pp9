import { Redirect } from "react-router-dom";
import { auth } from "./firebase";

let Home = (props) => {
  console.log(props.user ? "true" : "false");
  return (
    <div>
      {props.user ? (
        <>
          <h1>{props.user.displayName}</h1>
          <p>Email: {props.user.email}</p>
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
