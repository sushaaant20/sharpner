import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);

  const showHide = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // const incrementHandler5 = () => {
  //   dispatch({ type: "increment5" });
  // };
  // const decrementHandler5 = () => {
  //   dispatch({ type: "decrement5" });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showHide && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        {/* <button onClick={incrementHandler5}>Increment by 5</button>
        <button onClick={decrementHandler5}>Decrement by 5</button> */}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
