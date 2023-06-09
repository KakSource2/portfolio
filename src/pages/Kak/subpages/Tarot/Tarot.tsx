import { useOutletContext } from "react-router-dom";

const Tarot = () => {
  const english = useOutletContext();

  return <div className="Tarot">{english ? "" : ""}</div>;
};

export default Tarot;
