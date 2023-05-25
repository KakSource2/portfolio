import { useState } from "react";
import Header from "../Header";

const SearchBar = () => {
  const [english, setEnglish] = useState(true);
  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div>SearchBar</div>
    </>
  );
};
export default SearchBar;
