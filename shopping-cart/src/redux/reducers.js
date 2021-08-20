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
  let copy;
  switch (action.type) {
    case "ADD_TO_CART":
      copy = state.map((el) => el);
      index = copy.findIndex((el) => el.id === action.payload);
      copy[index].incart = copy[index].incart + 1;
      return copy;

    case "REMOVE_FROM_CART":
      copy = state.map((el) => el);

      index = copy.findIndex((el) => el.id === action.payload);
      if (copy[index].incart > 0) copy[index].incart = copy[index].incart - 1;
      return copy;

    default:
      return state;
  }
};
