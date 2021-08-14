import { incrementReducer } from "./reducers";
import { incrementActionCreator } from "./actions";
import { createStore } from "redux";

let store = createStore(incrementReducer);


export default store;