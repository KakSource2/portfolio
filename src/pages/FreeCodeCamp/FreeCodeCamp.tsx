import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const FreeCodeCamp = () => {
  const [english, setEnglish] = useState(true);
  const [dark, setDark] = useState(true);

  return (
    <div>
      <Header
        english={english}
        changeEnglish={() => setEnglish((prev) => !prev)}
        dark={dark}
        changeDark={() => setDark((prev) => !prev)}
      />
      <Outlet context={{ dark: dark, english: english }} />
      <Footer english={english} dark={dark} />
    </div>
  );
};
export default FreeCodeCamp;
