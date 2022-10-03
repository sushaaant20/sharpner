let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);

// add item function
function addItem(e) {
  e.preventDefault();

  //get input value
  let newItem = document.getElementById("item").value;

  // get input value
  let li = document.createElement("li");
  //class name
  li.className = "list-group-item";

  // add textNode with input value
  li.appendChild(document.createTextNode(newItem));

  // create the delete button element
  let deleteBtn = document.createElement("button");

  // add classes to the delete btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

//function to make delete button work
function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
