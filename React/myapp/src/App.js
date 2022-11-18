import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "nagpur",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "pune",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "london",
    },
  ];
  return (
    <Card className="expenses">
      <h2>Expenses</h2>
      <NewExpense />
      {/* Loop using map */}
      {expenses.map((expenses, index) => {
        return (
          <div id={expenses.id} key={index}>
            <ExpenseItem
              title={expenses.title}
              id={expenses.id}
              amount={expenses.amount}
              date={expenses.date}
            />
          </div>
        );
      })}
    </Card>
  );
};

export default App;
