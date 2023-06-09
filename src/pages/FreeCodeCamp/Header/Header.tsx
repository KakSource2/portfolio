import style from "./header.module.scss";
import logo from "../assets/logos/freecodecamp.jpg";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

const Header = ({
  english,
  changeEnglish,
  dark,
  changeDark,
}: {
  english: boolean;
  changeEnglish: () => void;
  dark: boolean;
  changeDark: () => void;
}) => {
  const navigate = useNavigate();

  const changePage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };

  return (
    <div className={dark ? style.header : `${style.header} ${style.light}`}>
      <div className={style.logo}>
        <h1>freeCodeCamp</h1>
        <img src={logo} />
      </div>
      <div className={style.challenges}>
        <h3>Challenges</h3>
        <select onChange={(e) => changePage(e)}>
          {projects.map((item) => (
            <option key={item.id} value={item.link}>
              {english ? item.name.en : item.name.es}
            </option>
          ))}
        </select>
      </div>
      <div className={style.config__btns}>
        <button onClick={() => changeEnglish()}>
          {english ? "Cambiar a Español" : "Change to English"}
        </button>
        <button onClick={() => changeDark()}>Dark</button>
      </div>
    </div>
  );
};
export default Header;
