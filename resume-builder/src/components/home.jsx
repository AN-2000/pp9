import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { setTemplate } from "../redux/actions";
import "./css/home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="template-container">
        <div
          className="template"
          onClick={() => {
            dispatch(setTemplate("A"));
            history.push("/personal");
          }}
        >
          <img src="http://localhost:3000/skin1.svg" />
        </div>
        <div
          className="template"
          onClick={() => {
            dispatch(setTemplate("B"));
            history.push("/personal");
          }}
        >
          <img src="http://localhost:3000/skin2.svg" />
        </div>
      </div>

      <button
        className="home-logout"
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Home;
