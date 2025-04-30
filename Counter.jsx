import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>The total count is: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click here</button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          disabled={count === 0}
        >
          Minus
        </button>
        <button onClick={() => setCount(0)}>Zero</button>
      </div>
    </div>
  );
};

export default Counter;
