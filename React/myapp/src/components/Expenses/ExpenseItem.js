import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // delete button function
  const removeExpense = () => {
    console.log(props.id);
    const element = document.getElementById(props.id);

    element.parentNode.removeChild(element);
  };

  return (
    <Card id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={removeExpense}>Delete</button>
    </Card>
  );
};
export default ExpenseItem;
