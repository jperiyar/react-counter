import { useState } from "react";

import "./styles.css";

const App = () => {
  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => (prevCounter += 1));
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter -= 1));
  };

  return (
    <div className="App">
      <div className="counter-wrapper">
        <h1 className="counter">{counter}</h1>
      </div>
      <button className="btn btn-primary" onClick={incrementCounter.bind(this)}>
        Increment Counter
      </button>
      <button
        className="btn btn-secondary"
        onClick={decrementCounter.bind(this)}
      >
        Decrement Counter
      </button>
    </div>
  );
};

export default App;
