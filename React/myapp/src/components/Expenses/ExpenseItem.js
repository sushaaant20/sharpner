import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  //amount to $100
  // const changeAmount = () => {
  //   setAmount("100");
  //   console.log("Amount Changed");
  // };
  // clickHandler function
  const clickHandler = () => {
    setTitle("UPDATED");
    console.log(title);
  };

  // delete button function
  // const removeExpense = () => {
  //   console.log(props.id);
  //   const element = document.getElementById(props.id);
  //   element.parentNode.removeChild(element);
  // };
  return (
    <Card id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
};
export default ExpenseItem;
