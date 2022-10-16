// accessing the variables
const container = document.getElementById("container");
const expenseInput = document.getElementById("expense");
const descriptionInput = document.getElementById("description");
const category = document.getElementById("selector");
const list = document.getElementById("listOfPeople");

// add event listner to the button
container.addEventListener("submit", onSubmit);

// onSubmit funciton
function onSubmit(e) {
  e.preventDefault();
  console.log("Submit Clicked");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `₹${expenseInput.value} : ${descriptionInput.value} => ${category.value}`
    )
  );
  list.appendChild(li);
}

// add delete and edit button
