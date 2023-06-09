import { useOutletContext } from "react-router-dom";

const Tetris = () => {
  const english = useOutletContext();

  return <div>{english ? "Sas" : "Sos"}</div>;
};

export default Tetris;
