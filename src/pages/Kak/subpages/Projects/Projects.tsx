import { useState } from "react";
import "./projects.css";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Projects = () => {
  const [english, setEnglish] = useState(false);
  const [dark, setDark] = useState(false);

  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };

  return (
    <div>
      <Header
        english={english}
        changeLocale={changeLocale}
        dark={dark}
        changeDark={() => setDark((prev) => !prev)}
      />
      <Outlet context={{ english: english, dark: dark }} />
      <Footer english={english} dark={dark} />
    </div>
  );
};
export default Projects;
