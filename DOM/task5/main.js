//task 7 GetElementsbyTAgName
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "red";
// }

// getElementByClassName
let list = document.getElementsByClassName("list-group-item");
console.log("list");
list[1].textContent = "Hello ji";
list[1].style.fontWeight = "bold";
list[1].style.backgroundColor = "orange";
