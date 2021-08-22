import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userReducer from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
let store = createStore(userReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
