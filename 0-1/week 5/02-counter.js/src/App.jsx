import React from "react";
import CustomButton from "./CustomButton";
import Props from "./Props";

const App = () => {
  //1
  //   const [count, setCount] = React.useState(0);
  //   const onclick = () => {
  //     setCount(count + 1);
  //   };
  //   return (
  //     <div>
  //       <button onClick={onclick}>Increment</button>
  //     </div>
  //   );
  //2
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Props text="hi" color="blue" />{" "}
      {/*we are re using a compont using props*/}
      <Props text="arsha" color="red" />
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
};

export default App;
