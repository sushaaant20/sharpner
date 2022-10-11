// Single Element Selectors

console.log(document.getElementById("my-form"));

console.log(document.querySelector(".container"));

// Multiple Element Selectors

console.log(document.querySelectorAll(".item"));

console.log(document.getElementsByTagName("li"));

console.log(document.getElementsByClassName("item"));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));

// MANIPULATING THE DOM

const ul = document.querySelector(".items");

// ul.remove();

// ul.lastElementChild.remove();

ul.firstElementChild.textContent = "Hello";

ul.firstElementChild.style.background = "green";

ul.children[1].innerText = "Brad";

ul.children[1].style.background = "yellow";

ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");

// Mouse Event

btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target.className);

  document.getElementById("my-form").style.background = "#ccc";

  //document.querySelector("body").classList.add("bg-dark");

  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();

  console.log(e.target.className);

  document.getElementById("my-form").style.background = "red";

  //document.querySelector("body").classList.add("bg-dark");

  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();

  console.log(e.target.className);

  document.getElementById("my-form").style.background = "orange";

  //document.querySelector("body").classList.add("bg-dark");

  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

const myForm = document.querySelector("#my-form");

const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");

const msg = document.querySelector(". msg");

const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");

    msg.innerHTML = "Please enter all fields";
  } else {
    console.log("Success");
  }
}
