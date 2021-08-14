import { counterReducer, authReducer } from "./reducers";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
  count:counterReducer,
  auth:authReducer,
});

export default rootReducer;
