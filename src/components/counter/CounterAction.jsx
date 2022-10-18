import { useState } from "react";
import Counter from "./Counter";

function CounterAction() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrrement = () => (count <= 0 ? "" : setCount(count - 1));
  return (
    <div>
      <Counter count={count} increment={increment} decrrement={decrrement} />
    </div>
  );
}

export default CounterAction;
