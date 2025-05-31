import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <div className="text-amber-50">
      My name is :{props.name}
      <Child childName={props.name} />
    </div>
  );
};

export default Parent;
