import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./redux/actions";

let App = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;
