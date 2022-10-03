let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// add item function
function addItem(e) {
  e.preventDefault();

  //get input value
  let newItem = document.getElementById("item").value;
  let newItem1 = document.getElementById("item1").value;

  // get input value
  let li = document.createElement("li");
  //class name
  li.className = "list-group-item";

  // add textNode with input value
  li.appendChild(document.createTextNode(newItem + " " + newItem1));

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

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
