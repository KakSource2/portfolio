import { useState } from "react";
import Header from "../Header";

function MemeGenerator() {
  const [english, setEnglish] = useState(true);
  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div>MemeGenerator</div>
    </>
  );
}
export default MemeGenerator;
