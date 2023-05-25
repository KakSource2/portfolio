import "./Home.css";
import { About, Header, Projects, Skills } from "./imports";
import { useEffect, useRef, useState } from "react";

const hasDarkMode = () => {
  let l = window.localStorage.getItem("dark_mode");
  if (l) return l;
  else return false;
};

const Home = () => {
  const [english, setEnglish] = useState(false);
  const [dark, setDark] = useState(true);
  const STRICT_MODE = useRef(false);
  document.title = "Portfolio";

  useEffect(() => {
    if (STRICT_MODE.current) return;

    const setLocale = () => {
      let l = localStorage.getItem("language");
      if (l === "english") setEnglish(true);
    };

    setLocale();

    if (!hasDarkMode) {
      window.localStorage.setItem("dark_mode", "light");
      setDark(false);
    } else {
      setDark(true);
    }
  }, []);

  const localeChanger = () => {
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
    <main className={dark ? "App dark-mode" : "App light-mode"}>
      <Header
        english={english}
        dark={dark}
        dark_light={() => setDark((prev) => !prev)}
        localeChanger={() => localeChanger()}
      />
      <About english={english} />
      <Projects english={english} />
      <Skills english={english} />
      {/* <Contact english={english} /> */}
    </main>
  );
};

export default Home;
