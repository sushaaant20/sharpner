studentObj = {
  yash: 26,

  vaibhav: 24,

  rajesh: 25,
};

let keysArr = Object.keys(studentObj);
console.log(keysArr);

let arr = [];

keysArr.forEach((elem) => arr.push(studentObj[elem]));

console.log(arr);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

avg = Math.floor(sum / arr.length);

console.log(avg);
