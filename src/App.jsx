import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";
import { decrement, increment } from "./features/countersSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const totalCount = counters.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <TotalCount TotalCount={totalCount} />
    </div>
  );
}

export default App;
