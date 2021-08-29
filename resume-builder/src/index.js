import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { userReducer, templateReducer, detailsReducer } from "./redux/reducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details: detailsReducer,
});

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
