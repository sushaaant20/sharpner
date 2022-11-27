import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/UI/MealsSummary";
function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
    </Fragment>
  );
}

export default App;
