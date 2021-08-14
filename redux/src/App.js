import { useSelector,useDispatch } from "react-redux";

import {incrementActionCreator} from "./redux/actions"

function App() {
  //useSelector hook ko ek function dete hai jisko state milti hai joki redux store me stored hai, and then is function ke ander se we can manipulate the state and return it.
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch()


  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>{
        dispatch(incrementActionCreator())
      }}>+</button>
    </div>
  );
}

export default App;
