import { useEffect, useState } from "react";
import "./TMDB.css";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const TMDB = () => {
  const [english, setEnglish] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token_tmdb");

  useEffect(() => {
    if (!token) return navigate("login");
    if (token) return navigate("/tmdb/listings");
  }, []);

  return (
    <div className="Movies">
      <Header
        english={english}
        changeEnglish={() => setEnglish((prev) => !prev)}
      />
      <Outlet context={english} />
      <Footer />
    </div>
  );
};

export default TMDB;
