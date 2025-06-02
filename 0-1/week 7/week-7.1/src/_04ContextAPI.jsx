import React, { useContext, useState } from "react";
import { CountContext } from "./_04Context";

// Context API get rid of prop drilling.
const _04ContextAPI = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
};

function Count() {
  return (
    <div>
      <CounterRender />
      <Button />
    </div>
  );
}

function CounterRender() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default _04ContextAPI;
