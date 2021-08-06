import { Redirect } from "react-router-dom";
import { auth } from "./firebase";
import { userContext } from "./App";
import { useContext } from "react";

let Home = () => {
  let value = useContext(userContext);

  return (
    <div>
      {value ? (
        <>
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
