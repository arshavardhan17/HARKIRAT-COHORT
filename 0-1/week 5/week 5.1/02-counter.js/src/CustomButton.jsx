import React from "react";

const CustomButton = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
    </div>
  );
};

export default CustomButton;
