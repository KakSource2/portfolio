import BushkraftHome from "./components/BushkraftHome";
import Header from "./components/Header";
import Menu from "./components/Menu";
import News from "./components/News";
import "./styles/bushkraft.css";

const Bushkraft = () => {
  return (
    <div className="Bushkraft">
      <Header />
      <Menu />
      <News />
      <BushkraftHome />
    </div>
  );
};

export default Bushkraft;
