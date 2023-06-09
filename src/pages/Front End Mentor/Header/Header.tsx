import style from "./header.module.scss";
import img_logo from "../assets/logo-kak.png";
import { Link, useNavigate } from "react-router-dom";
import { challenges } from "../data/challenges";
import icon_sun from "../assets/icons/sun.png";
import icon_moon from "../assets/icons/moon.png";

const Header = ({
  english,
  changeLocale,
  dark,
  changeDark,
}: {
  english: boolean;
  changeLocale: () => void;
  dark: boolean;
  changeDark: () => void;
}) => {
  const navigate = useNavigate();

  const handleOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };

  return (
    <div className={dark ? style.header : `${style.header} ${style.light}`}>
      <Link className={style.logo} to={"/"}>
        <img src={img_logo} />
      </Link>
      <div className={style.options}>
        <h3>{english ? "CHALLENGE" : "DESAFÍO"}</h3>
        <select onChange={(e) => handleOptions(e)}>
          {challenges.map((item) => (
            <option key={item.id} value={item.link}>
              {english ? item.name.en : item.name.es}
            </option>
          ))}
        </select>
      </div>
      <div className={style.config}>
        <button onClick={() => changeLocale()}>
          {english ? "Cambiar a Español" : "Change to English"}
        </button>
        <button onClick={() => changeDark()}>
          {dark ? <img src={icon_moon} /> : <img src={icon_sun} />}
        </button>
      </div>
    </div>
  );
};
export default Header;
