import { SET_USER, SET_TEMPLATE, SET_DETAILS } from "./constants";

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

export const setDetails = (detail) => {
  return {
    type: SET_DETAILS,
    payload: detail,
  };
};
