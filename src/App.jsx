import React, { useState } from "react";
import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
function App() {
  const [counters, setCounters] = useState(initialCounters);
  const totalCount = counters.reduce((acc, current) => {
    return acc + current.value;
  }, 0);
  const handleIncrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(newCounters);
  };
  const handleDecrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(newCounters);
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
