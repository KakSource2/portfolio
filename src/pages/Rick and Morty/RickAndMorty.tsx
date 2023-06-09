import { useEffect, useState } from "react";
import Header from "./Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

const RickAndMorty = () => {
  const [english, setEnglish] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLocale = () => {
      const l = localStorage.getItem("language");
      if (l === "english") {
        setEnglish(true);
      }
      if (l === "spanish") {
        setEnglish(false);
      }
    };
    checkLocale();
    navigate("/rick-and-morty/characters/1");
  }, []);

  const changeLanguage = () => {
    if (!english) {
      localStorage.setItem("language", "english");
      setEnglish(true);
    }
    if (english) {
      localStorage.setItem("language", "spanish");
      setEnglish(false);
    }
  };

  const changeTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <div className="RickAndMorty">
      <Header
        changeTheme={changeTheme}
        theme={dark}
        changeLanguage={changeLanguage}
        english={english}
      />
      <Outlet context={{ english: english, theme: dark }} />
      <Footer theme={dark} english={english} />
    </div>
  );
};

export default RickAndMorty;
