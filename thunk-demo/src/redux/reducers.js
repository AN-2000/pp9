import { useReducer } from "react";

let initialState = {
  data: [],
  loading: null,
  err: null,
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        loading: true,
      };

    case "SUCCESS_USERS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FAILURE_USERS":
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
