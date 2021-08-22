import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import userReducer from "./redux/reducers";

let store = createStore(userReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
