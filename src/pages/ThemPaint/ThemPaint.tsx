import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";

const ThemPaint = () => {
  const [english, setEnglish] = useState(false);
  const [dark, setDark] = useState(false);
  return (
    <div className="ThemPaint">
      <Header
        english={english}
        changeEnglish={() => setEnglish((prev) => !prev)}
        dark={dark}
        changeDark={() => setDark((prev) => !prev)}
      />
      <Outlet context={{ english, dark }} />
      <Footer english={english} dark={dark} />
    </div>
  );
};
export default ThemPaint;
