import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { userReducer, templateReducer } from "./redux/reducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
});

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
