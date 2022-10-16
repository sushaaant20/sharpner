// accessing the variables
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit events
form.addEventListener("submit", addItem);

// delete event or added items
itemList.addEventListener("click", removeItem);

//filtering or searching text
filter.addEventListener("keyup", filterItems);

// addItem function
function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("item").value;

  // create new li
  var li = document.createElement("li");

  // add class to li
  li.className = "list-group-item";

  // add text node with input vale
  li.appendChild(document.createTextNode(newItem));

  // create a del button
  var deleteBtn = document.createElement("button");

  // add class to the button
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";

  // append the button the li
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  // append li to the list
  itemList.appendChild(li);
}

// removeItem function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

//filterItem functions(e)
function filterItems(e) {
  // converting all the text to lower case
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");

  // converting into an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
