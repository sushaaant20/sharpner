/*
This function is for using the axios.post command which sends the user entered data to the backend
and saves it for the future use
It also displays the data entered by the user on the screen

*/
function addNewExpense(e) {
  e.preventDefault();
  const form = new FormData(e.target);

  const expenseDetails = {
    expenseamount: form.get("expenseamount"),
    description: form.get("description"),
    category: form.get("category"),
  };

  axios
    .post(
      "https://crudcrud.com/api/ec4cd73c76e74460a545a57a3832ef34/expense",
      expenseDetails
    )
    .then((response) => {
      addNewExpensetoUI(response.data);
    })
    .catch((err) => console.log(err));
  console.log(expenseDetails);
}

/*
below code is run when the window is reloaded,
it fetches the data from the backend and serves on the screen
*/
window.addEventListener("DOMContentLoaded", (event) => {
  axios
    .get("https://crudcrud.com/api/ec4cd73c76e74460a545a57a3832ef34/expense")
    .then((res) => {
      res.data.forEach((expense) => {
        const parentElement = document.getElementById("listOfExpenses");
        const expenseElemId = `expense-${expense._id}`;
        parentElement.innerHTML += `
        <li id=${expenseElemId}>
            ₹
${expense.expenseamount} - ${expense.category} - ${expense.description}
            <button onclick=deleteExpense('${expense._id}')>
                Delete 
            </button>
            <button onclick=editExpense('${expense.expenseamount}','${expense.category}','${expense.description}','${expense._id}')>
                Edit
            </button>
        </li>`;
        //console.log(expense._id);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

/*
EDIT BUTTON
It sends the details to the input field and deletes the current data
So when the user submits again fresh data is sent to the backend
*/
function editExpense(expenseamount, category, description, expenseId) {
  console.log(expenseamount, category, description, expenseId);
  document.getElementById("expenseamount").value = expenseamount;
  document.getElementById("description").value = description;
  document.getElementById("category").value = category;
  deleteExpense(expenseId);
}

/*
Delete user function, it deletes data from both backend and frontend
 and accordingly updates everything
*/
function deleteExpense(expenseid) {
  axios
    .delete(
      `https://crudcrud.com/api/ec4cd73c76e74460a545a57a3832ef34/expense/${expenseid}`
    )
    .then((response) => {
      console.log(response);
      removeExpensefromUI(expenseid);
    })
    .catch((err) => {
      console.log(err);
    });
  //location.reload();
}

/*
===============================================================================================================================
This function is used in addNewExpense function to update the screen with the 
expense details entered by the user.
*/
function addNewExpensetoUI(expense) {
  const parentElement = document.getElementById("listOfExpenses");
  const expenseElemId = `expense-${expense._id}`;
  parentElement.innerHTML += `
        <li id=${expenseElemId}>
            ₹
${expense.expenseamount} - ${expense.category} - ${expense.description}
            <button onclick=deleteExpense('${expense._id}')>
                Delete
            </button>
            <button onclick=editExpense('${expense.expenseamount}', '${expense.category}','${expense.description}')>
                Edit
            </button>
        </li>`;
}
/* ============================================================================================================================== */

// function showError(err) {
//   document.body.innerHTML += `<div style="color:red;"> ${err}</div>`;
// }

function removeExpensefromUI(expenseid) {
  const expenseElemId = `expense-${expenseid}`;
  document.getElementById(expenseElemId).remove();
}
