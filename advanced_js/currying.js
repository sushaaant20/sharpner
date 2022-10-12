// let multiply = function (x, y) {
//   console.log(x * y);
// };
// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

let multiply = function (x) {
  return function (y) {
    console.log(z * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByTwo(10);
