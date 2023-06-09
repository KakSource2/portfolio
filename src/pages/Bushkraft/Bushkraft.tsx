import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";

const BushkraftHome = () => {
  const [english, setEnglish] = useState(true);
  const [dark, setDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/bushkraft/");
  }, []);

  return (
    <>
      <Header
        english={english}
        changeLocale={() => setEnglish((prev) => !prev)}
        dark={dark}
        changeDark={() => setDark((prev) => !prev)}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default BushkraftHome;
