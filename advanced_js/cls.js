// /**
// This can be used in Global Scope, Object, Function, Prototype,Method
// class

//  */

// // global
// this.table = "window table";
// this.garage = {
//   table: "garage table",
// };

// //Object
// let johnsRoom = {
//   table: "johns table",
//   cleanTable() {
//     console.log(this.table);
//   },
// };

// // this inside a function
// function Foo() {
//   this.foo = "bar";
// }

// const cleanTable = function (soap) {
//   const innerFunction = function (_soap) {
//     console.log(`cleaning ${this.table} using ${_soap}`);
//   };
//   innerFunction.soap(soap);
// };

// //prototype
// let createRoom = function (name) {
//   this.table`${name}s table`;
// };
// createRoom.prototype.cleanTable = function (soap) {
//   console.log(`cleaning ${this.table} using ${soap}`);
// };
// const jillsRoom = new createRoom("jill");
// const johnsroom = new createRoom("john");

// jillsRoom.cleanTable("some soap");
// johnsroom.cleanTable("some soap");

// var x = function () {
//   this.val = 1;
//   setTimeout(() => {
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };
// var xx = new x();

class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge) {
    return (minMarks) => {
      if (this.marks > minMarks && this.age > minPlacementAge) {
        console.log(this.name + " is ready for placements");
      } else {
        console.log(this.name + " is not ready for placements");
      }
    };
  }
}

const Sushant = new Student("sushant", 22, 75);

Sushant.setPlacementAge(18)(40);
