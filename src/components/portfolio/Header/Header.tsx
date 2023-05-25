import "./Header.css";
import i_sun from "./assets/sun.png";
import i_moon from "./assets/moon.png";

const Navbar = ({
  english,
  dark,
  localeChanger,
  dark_light,
}: {
  english: boolean;
  dark: boolean;
  localeChanger: () => void;
  dark_light: () => void;
}) => {
  return (
    <header className="Navbar">
      <a href="#about" className="title">
        Gaston Bernardez
      </a>
      <div className="btns">
        <a href="#apps">Apps</a>
        <a href="#skills">{!english ? "Habilidades" : "Skills"}</a>
      </div>
      <div className="config">
        <button onClick={() => localeChanger()}>
          {english ? "English" : "Español"}
        </button>
        <button
          onClick={() => dark_light()}
          className={dark ? "dark-mode" : "light-mode"}
        >
          {dark ? <img src={i_sun} /> : <img src={i_moon} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
