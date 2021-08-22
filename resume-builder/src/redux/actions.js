import { SET_USER } from "./constants";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
