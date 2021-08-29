import { SET_USER, SET_TEMPLATE } from "./constants";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setTemplate = (code) => {
  return {
    type: SET_TEMPLATE,
    payload: code,
  };
};
