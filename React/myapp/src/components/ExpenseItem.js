import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div>
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
      </div>
    </div>
  );
}
export default ExpenseItem;
