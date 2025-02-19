import React, { useState } from 'react';

// Define the Counter component
function Counter() {
  // Initialize state 'count' with 0 and get the setter function 'setCount'
  // useState(0) creates a state variable initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    // Use the functional form of setCount to ensure we're working with the latest state
    setCount(Count => Count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    // Use the functional form of setCount to ensure we're working with the latest state
    setCount(Count => Count - 1);
  };

  // The JSX that will be rendered
  return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>
      
      {/* Button to increment the count */}
      <button onClick={increment}>
        Increment (+1)
      </button>
      
      {/* Button to decrement the count */}
      <button onClick={decrement}>
        Decrement (-1)
      </button>
    </div>
  );
}

// Export the Counter component so it can be imported in other files
export default Counter;