import { useState } from "react";
import Header from "../Header";

const Tarot = () => {
  const [english, setEnglish] = useState(true);
  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };
  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div className="Tarot"></div>
    </>
  );
};

export default Tarot;
