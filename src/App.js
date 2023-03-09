import { useState } from "react";
/* 
let count = 0;

function setCount(newValue) {
  count = newValue;
} */

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +1
      </button>
    </>
  );
}
