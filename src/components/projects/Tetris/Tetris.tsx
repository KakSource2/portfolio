import { useState, useEffect } from "react";
import Header from "../Header";

const Tetris = () => {
  const [english, setEnglish] = useState(false);

  useEffect(() => {
    let l = localStorage.getItem("language");
    if (l) {
      if (l === "spanish") setEnglish(false);
      if (l === "english") setEnglish(true);
    }
  });

  const changeLocale = () => {
    if (!english) {
      localStorage.setItem("language", "english");
      setEnglish(true);
    }
    if (english) {
      localStorage.setItem("language", "spanish");
      setEnglish(false);
    }
  };

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div></div>
    </>
  );
};

export default Tetris;
