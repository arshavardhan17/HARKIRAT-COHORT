import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState, // if you want bot count and set count use this
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      {/* <EvenCountRenderer /> */}
    </div>
  );
}

// function EvenCountRenderer() {
//   const isEven = useRecoilValue(evenSelector);

//   return <div>
//     {isEven ? "It is even" : null}
//   </div>
// }

function Buttons() {
  const count = useRecoilValue(countAtom); //no need here
  const setCount = useSetRecoilState(countAtom);
  //const [count,setCount] =useRecoilState(countAtom)
  console.log("buttons re-rendererd");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1); //using function getting current state not updating count directly
        }}>
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}>
        Decrease
      </button>
    </div>
  );
}

export default App;
