// QuerySelector && QuerySelectorALL
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 10px yellow";

var input = document.querySelector("input");
input.value = "Hello World";

//Make the 2nd item have green background color
let list = document.querySelector("#item-2");
list.style.backgroundColor = "green";

//Make the 3rd item invisible
let list3 = document.querySelector(".list-group-item:nth-child(3)");
list3.textContent = "";

// Query Selector All
let title = document.querySelectorAll(".title");
console.log(title);
title[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}

// Using QuerySelectorALL change the font color to green for
//2nd item in the item list
let item3 = document.querySelectorAll(".list-group-item");
console.log(item3);
item3[1].style.color = "green";
