import { firestore } from "../firebase";
import {
  SET_USER,
  SET_TEMPLATE,
  SET_DETAILS,
  SAVE_START,
  SAVE_COMPLETE,
  SAVE_ERR,
} from "./constants";

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

export const saveStart = () => {
  return {
    type: SAVE_START,
  };
};

export const saveCompleted = (id) => {
  return {
    type: SAVE_COMPLETE,
    payload: id,
  };
};

export const saveErr = (err) => {
  return {
    type: SAVE_ERR,
    payload: err,
  };
};

export const saveResume = (uid, details, code) => {
  return (dispatch) => {
    dispatch(saveStart());
    firestore
      .collection("resume")
      .add({
        uid,
        details,
        code,
      })
      .then((docRef) => {
        return docRef.get();
      })
      .then((doc) => {
        dispatch(saveCompleted(doc.id));
      })
      .catch((err) => {
        dispatch(saveErr(err));
      });
  };
};
