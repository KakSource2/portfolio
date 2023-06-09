import { useState } from "react";

const Item = ({ framework }: { category: string; framework: string }) => {
  const [count, setCount] = useState(0);

  const change = (add: boolean) => {
    if (add) return setCount((prev) => prev + 1);
    if (!add) {
      return setCount((prev) => {
        if (prev === 0) return prev;
        return prev - 1;
      });
    }
  };

  return (
    <div className="item">
      <button onClick={() => change(false)}>-</button>
      <div>
        <span className="title">{framework}</span>
        <span>{count}</span>
      </div>
      <button onClick={() => change(true)}>+</button>
    </div>
  );
};

export default Item;
