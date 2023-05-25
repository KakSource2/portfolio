import { useState } from "react";
import Header from "../Header";

const MusicPlayer = () => {
  const [english, setEnglish] = useState(false);
  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };
  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div>MusicPlayer</div>
    </>
  );
};
export default MusicPlayer;
