let form = document.getElementById("form");
let list = document.getElementById("expenses");

//form submit event
form.addEventListener("submit", addExpense);

//delete an event
list.addEventListener("click", removeItem);
