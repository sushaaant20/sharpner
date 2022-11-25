/* 
Holds logic to add New User 
*/
import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCollege, setCollege] = useState("");

  const [error, setError] = useState();

  //form submit function
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef, ageInputRef);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter valid name and Age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter valid Age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredCollege);
    // console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
    setCollege("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const collegeNameHandler = (event) => {
    setCollege(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="username">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeNameHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
