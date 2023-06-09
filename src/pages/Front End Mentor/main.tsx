import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useState } from "react";

const Home = () => {
  const [english, setEnglish] = useState(true);
  const [dark, setDark] = useState(true);

  return (
    <div>
      <Header
        english={english}
        changeLocale={() => setEnglish((prev) => !prev)}
        dark={dark}
        changeDark={() => setDark((prev) => !prev)}
      />
      <Outlet context={{ dark: dark, english: english }} />
      <Footer english={english} />
    </div>
  );
};
export default Home;
