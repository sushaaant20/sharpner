// event listener for submit
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input value
  var amount = document.getElementById("amount").value;
  var description = document.getElementById("description").value;
  var category = document.getElementById("category").value;
  // Create new li element
  var p = document.createElement("p");

  // Add class
  p.className = "list-group-item";
  // Add text node with input value
  p.appendChild(
    document.createTextNode(amount + " " + description + " " + category + " ")
  );

  // Append li to list
  itemList.appendChild(p);

  if (amount.length > 0 && description.length > 0) {
    // delete button element
    var deletBtn = document.createElement("button");
    // add classes to the delete button element
    deletBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    deletBtn.appendChild(document.createTextNode("Delete"));
    // Append button to li
    p.appendChild(deletBtn);

    p.addEventListener("click", () => {
      localStorage.removeItem(amount);
      p.remove();
    });

    // Create edit button element
    var editBtn = document.createElement("button");
    // Add clases to edit button
    editBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    editBtn.appendChild(document.createTextNode("Edit"));
    // Append button to li
    p.appendChild(editBtn);
    p.addEventListener("click", () => {
      localStorage.removeItem(amount);
      p.remove();
    });

    let myObj = {
      inputamount: amount,
      inputdescription: description,
      inputCategory: category,
    };

    let myobj_serialized = JSON.stringify(myObj);
    localStorage.setItem(myObj.inputamount, myobj_serialized);
    let myObj_deserialized = JSON.parse(
      localStorage.getItem(myObj.inputamount)
    );
    console.log(myObj_deserialized);
  }
});
