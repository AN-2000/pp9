let a = {
  x: {
    z: "gamma",
  },
  y: "beta",
};

let {
  x: { z },
} = a.x;

console.log(a);
console.log(z);
