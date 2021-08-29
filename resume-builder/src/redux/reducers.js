import { SET_USER, SET_TEMPLATE } from "./constants";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export const templateReducer = (state = null, action) => {
  switch (action.type) {
    case SET_TEMPLATE:
      return action.payload;
    default:
      return state;
  }
};
