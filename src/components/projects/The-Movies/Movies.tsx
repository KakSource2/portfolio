import { useState } from "react";
import Footer from "./components/Footer";
import HeaderMovies from "./components/Header";
import Login from "./components/Login";
import Header from "../../Header";
import "./styles/movies.css";

const Movies = () => {
  const [display, setDisplay] = useState("");
  const [english, setEnglish] = useState(true);

  const funcHandlers = {
    login: () => {
      setDisplay("login");
    },
    listing: () => {
      setDisplay("listing");
    },
  };

  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };

  return (
    <div className="Movies">
      <Header english={english} changeLocale={changeLocale} />
      <HeaderMovies funcHandlers={funcHandlers} />
      {display === "login" && (
        <div>
          <Login english={english} redirect={funcHandlers.listing} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Movies;
