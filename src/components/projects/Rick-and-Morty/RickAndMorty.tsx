import { useEffect, useState } from "react";
import Header from "../../Header";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";

const RickAndMorty = () => {
  const [english, setEnglish] = useState(false);
  const [display, setDisplay] = useState("");
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
  }, []);

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

  const displayChangers = {
    characters: () => setDisplay("characters"),
    locations: () => setDisplay("locations"),
    episodes: () => setDisplay("episodes"),
  };

  return (
    <div>
      <Header changeLocale={changeLocale} english={english} />
      <Navbar displayChangers={displayChangers} />
      {display === "characters" && <Characters />}
      {display === "locations" && <Locations />}
      {display === "episodes" && <Episodes />}
    </div>
  );
};

export default RickAndMorty;
