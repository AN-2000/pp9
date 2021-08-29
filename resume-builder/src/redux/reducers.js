import {
  SET_USER,
  SET_TEMPLATE,
  SET_DETAILS,
  SAVE_START,
  SAVE_COMPLETE,
  SAVE_ERR,
} from "./constants";

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
  isPublic: false,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

let saveState = {
  loading: null,
  err: null,
  id: "",
};

export const saveReducer = (state = saveState, action) => {
  switch (action.type) {
    case SAVE_START:
      return {
        ...state,
        loading: true,
      };
    case SAVE_COMPLETE:
      return {
        ...state,
        loading: false,
        id: action.payload,
      };
    case SAVE_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
