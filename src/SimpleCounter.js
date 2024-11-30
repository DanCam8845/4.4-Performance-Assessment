import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count-1);
    };

    return (
        <div>
            <h1>Simple Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase Count</button>
            <button onClick={decrement}>Decrease Count</button>
        </div>
    );
};
export default Counter;