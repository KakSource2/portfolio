import { useOutletContext } from "react-router-dom";

function MemeGenerator() {
  const english = useOutletContext();

  return <div>{english ? "Meme Generator" : "Generador de memes"}</div>;
}
export default MemeGenerator;
