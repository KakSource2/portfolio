type Box = {
  height: string;
  width: string;
  borderRadius?: string;
};

const Box = (style: Box) => {
  return <div style={style} className="Box"></div>;
};

export default Box;
