// accessing the elements
let myForm = document.getElementById("my-form");
let userName = document.getElementById("name");
let email = document.getElementById("listOfPeople");
let userList = document.getElementById("listOfPeople");

//Listen for the submit button
myForm.addEventListener("submit", onSubmit);

//on Submit Funciton
function onSubmit() {
  e.preventDefault();
  if (userName === "" || email === "") {
    alert("PLs enter some values");
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${UserName.value} => ${email.value}`)
    );
    userList.appendChild(li);
  }
}
