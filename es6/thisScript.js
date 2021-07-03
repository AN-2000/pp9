let obj = {
  someArr: [3, 7, 12],
  f: function () {
    let f2 = () => {
      this.someArr.map(function (e) {
        console.log(2 * e);
      });
    };
    f2();
  },
};

obj.f();



// //normal function (keyword function; i can give it a name)
// function f1() {
//   console.log("Hi");
// }

// //arrow function (no keyword only symbols; i cannot give it name so i've to store it in a variable)
// let f2 = () => {
//   console.log("Hi");
// };

// // ------------------------------------------------------

// function f3() {
//   return 2;
// }

// let f4 = () => 2;

// // --------------------------------------------------------

// function f5(a, b) {
//   return 2;
// }

// let f6 = (a, b) => 2;

// // --------------------------------------------------

// function f7(a) {
//   return 2;
// }

// let f8 = (a) => 2;
