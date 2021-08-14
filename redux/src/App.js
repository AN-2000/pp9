import { useSelector, useDispatch } from "react-redux";

import {
  incrementActionCreator,
  decrementActionCreator,
  loginActionCreator,
} from "./redux/actions";

function App() {
  //useSelector hook ko ek function dete hai jisko state milti hai joki redux store me stored hai, and then is function ke ander se we can manipulate the state and return it.
  let countState = useSelector((state) => {
    return state.count;
  });

  let authState = useSelector((state) => {
    console.log(state);
    return state.auth;
  });

  let dispatch = useDispatch();

  return (
    <div>
      <p>{countState}</p>
      <button
        onClick={() => {
          dispatch(incrementActionCreator(4));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(decrementActionCreator());
        }}
      >
        -
      </button>

      <div>
        <button
          onClick={() => {
            dispatch(loginActionCreator());
          }}
        >
          login
        </button>
        <p>{authState ? "some private text" : ""}</p>
      </div>
    </div>
  );
}

export default App;
