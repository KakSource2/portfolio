const Item = ({
  framework,
  count,
  add,
}: {
  category: string;
  framework: string;
  count: number;
  add: () => void;
}) => {
  return (
    <div className="item">
      <button>-</button>
      <div>
        <span className="title">{framework}</span>
        <span>{count}</span>
      </div>
      <button onClick={() => add()}>+</button>
    </div>
  );
};

export default Item;
