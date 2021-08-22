// to fetch

export const fetchAction = () => {
  return {
    type: "FETCH_USERS",
  };
};

// user successfully

export const successAction = (users) => {
  return {
    type: "SUCCESS_USERS",
    payload: users,
  };
};

// user failure
export const failureAction = (err) => {
  return {
    type: "FAILURE_USERS",
    payload: err,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchAction());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(successAction(json));
      })
      .catch((err) => {
        dispatch(failureAction(err));
      });
  };
};
