import React from "react";
function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="bg-gray-400 p-6 text-center">
      <p className="mb-4">Count: {count}</p>
      <button className="px-4 py-2 bg-blue-600" onClick={onIncrement}>
        Increment
      </button>
      <button className="px-4 py-2 bg-blue-600 ml-3" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
