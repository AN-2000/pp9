import { SET_USER, SET_TEMPLATE, SET_DETAILS } from "./constants";

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

let initialState = {
  fname: "",
  lname: "",
  city: "",
  state: "",
  email: "",
  phone: "",
  degree: "",
  cgpa: "",
  college: "",
  year: "",
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
