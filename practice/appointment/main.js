// accessing the elements

var myForm = document.getElementById("my-form");
var userName = document.getElementById("name");
var email = document.getElementById("email");
var userList = document.getElementById("listOfPeople");

//listen for submit
myForm.addEventListener("submit", onSubmit);

// funciton onSubmit
function onSubmit(e) {
  e.preventDefault();

  if (userName.value === "" || email.value === "") {
    alert("Pleasse enter all the fileds");
    //remove error after 30 seconds
  } else {
    //creating new list item
    const li = document.createElement("li");
    // add text node with inputvalues
    li.appendChild(
      document.createTextNode(`${userName.value} ${email.value} `)
    );
    // adding to the local storage
    localStorage.setItem(email, `${userName.value}: ${email.value}`);
    console.log(localStorage.getItem(email));
    userList.appendChild(li);

    // creating delete button
    const delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(delBtn);

    // creating Edit button
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);
  }
}
