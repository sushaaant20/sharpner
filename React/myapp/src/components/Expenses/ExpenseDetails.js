import "./ExpenseItem.css";

export default function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>Location: {props.location}</div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
