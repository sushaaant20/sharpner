// USER FORM SCRIPT
const myForm = document.getElementById("my-form");
const nameInput = document.getElementById("name").value;
const emailInput = document.getElementById("email").value;
const showData = document.getElementById("showData");
const getReq = document.getElementById("get");
//console.log(nameInput, emailInput);

// Listen for form submit
myForm.addEventListener("submit", onSubmit);
getReq.addEventListener("click", getData);

function onSubmit(e) {
  e.preventDefault();
  console.log("SUBMIT");
  updateData();
  //getData();
  //console.log(document.getElementById("email").value);
}

//PUT REQUEST
function updateData() {
  axios
    .post(
      "https://crudcrud.com/api/96c31792e5cc462b811df87e5012af4f/appointmentData",
      {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function getData(e) {
  e.preventDefault();
  axios
    .get(
      "https://crudcrud.com/api/96c31792e5cc462b811df87e5012af4f/appointmentData?_limit=5"
    )
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

function showOutput(res) {
  // document.getElementById("showData").innerHTML = `\
  // <div>
  // <h5>${JSON.stringify(res.data, null, 2)}</h5>
  // </div>
  // `;
  // const myData = JSON.stringify(res.data, null);
  // console.log(myData);
  let output = "";
  console.log(res);
  for (let i = 0; i < res.data.length; i++) {
    output +=
      "<li>" +
      res.data[i].Name +
      "&nbsp" +
      "&nbsp" +
      res.data[i].Email +
      `<button onClick=${editFeature}>EDIT</button>` +
      `<button onClick=${deleteFeature}>DELETE</button>` +
      "</li>";
  }
  document.getElementById("showData").innerHTML = output;
  //console.log(myData);
  //extracting data from table header
}

function editFeature() {}
function deleteFeature() {
  axios.delete(
    "https://crudcrud.com/api/96c31792e5cc462b811df87e5012af4f/appointmentData"
  );
}
