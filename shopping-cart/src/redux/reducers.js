let initialState = [
  {
    id: 1,
    name: "Phone",
    Price: 10000,
    img: "phone.jpeg",
    incart: 0,
  },
  {
    id: 2,
    name: "Car",
    Price: 1000000,
    img: "car.webp",
    incart: 0,
  },
  {
    id: 3,
    name: "Play station",
    Price: 10000,
    img: "ps.webp",
    incart: 0,
  },
];

export const reducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case "ADD_TO_CART":
      index = state.findIndex((el) => el.id === action.payload);
      state[index].incart = state[index].incart + 1;
      console.log(state);
      return state;

    case "REMOVE_FROM_CART":
      index = state.findIndex((el) => el.id === action.payload);
      if (state[index].incart > 0)
        state[index].incart = state[index].incart - 1;
      return state;

    default:
      return state;
  }
};
