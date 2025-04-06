import React from "react";

const Props = (props) => {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.text}</h1>
    </div>
  );
};

export default Props;
