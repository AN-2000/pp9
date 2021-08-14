export const incrementReducer = (state = 10, action) => {
  if (action.type === "INCREMENT") {
    state = state + 1;
  }

  return state;
};
