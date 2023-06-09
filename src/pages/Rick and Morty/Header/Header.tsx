import { Link } from "react-router-dom";
import style from "./header.module.scss";
import portal from "./portal.jpg";
import Search from "./Search";
import logo from "./logo-kak.png";
const Header = ({
  english,
  changeLanguage,
  theme,
  changeTheme,
}: {
  english: boolean;
  changeLanguage: () => void;
  theme: boolean;
  changeTheme: () => void;
}) => {
  const myStyle = {
    background: `url(${portal})`,
  };

  return (
    <header
      className={theme ? style.header : `${style.header} ${style.dark}`}
      style={myStyle}
    >
      <Link to="/">
        <img src={logo} />
      </Link>
      <main>
        <Link to="characters">
          <p>{english ? "Characters" : "Personajes"}</p>
        </Link>
        <Link to="locations">
          <p>{english ? "Locations" : "Localidades"}</p>
        </Link>
        <Link to="episodes">
          <p>{english ? "Episodes" : "Episodios"}</p>
        </Link>
      </main>
      <Search english={english} />
      <button className={style.language} onClick={() => changeLanguage()}>
        {english ? "English" : "Español"}
      </button>
      <button className={style.theme} onClick={() => changeTheme()}>
        Light
      </button>
    </header>
  );
};
export default Header;
