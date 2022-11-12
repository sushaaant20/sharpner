import ExpenseItem from "./components/Expenses/ExpenseItem";
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
  expenses.forEach(() => {});
  return (
    <div>
      <h2>Expenses</h2>
      {/* Loop using map */}
      {expenses.map((expenses, index) => {
        return (
          <div key={index}>
            <ExpenseItem
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
              location={expenses.location}
            />
          </div>
        );
      })}
      {/* {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].location}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].location}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        location={expenses[3].location} 
      /> */}
    </div>
  );
};

export default App;
