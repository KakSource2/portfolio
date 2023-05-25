import { useState } from "react";
import Header from "../Header";

const ToDoList = () => {
  const [english, setEnglish] = useState(true);
  const changeLocale = () => {
    setEnglish((prev) => !prev);
  };
  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div></div>
    </>
  );
};

export default ToDoList;
