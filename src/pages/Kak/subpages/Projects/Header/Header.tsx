import style from "./header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo-kak.png";
import projects_data from "../data/projects";

const Header = ({
  changeLocale,
  english,
  dark,
  changeDark,
}: {
  changeLocale: () => void;
  english: boolean;
  dark: boolean;
  changeDark: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const triggerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    projects_data.find((item) => {
      const { es, en } = item.name;
      if (es === e.target.value || en === e.target.value) {
        return navigate(item.link);
      }
    });
  };

  const nextChallenge = () => {
    let withoutWip = projects_data.filter((item) => !item.wip);

    withoutWip.find((item, index) => {
      if (location.pathname === item.link) {
        if (index + 1 === withoutWip.length) {
          return navigate(withoutWip[0].link);
        }
        return navigate(withoutWip[index + 1].link);
      }
    });

    // projects.find((item) => {
    //   if (item.link === location.pathname) {
    //     navigate(projects[item.id].link);
    //   }
    // });
  };

  const checkPathname = () => {
    let find = projects_data.find((item) => item.link === location.pathname);
    if (!find) return;
    if (english) return find?.name.en;
    if (!english) return find?.name.es;
  };

  return (
    <header className={style.header}>
      <Link
        className={dark ? style.logo : `${style.logo} ${style.light}`}
        to="/"
      >
        <img src={logo} />
      </Link>
      <Link to={`${window.location.origin}/`}>
        {english ? "Back to Portfolio" : "Volver al Portafolio"}
      </Link>
      <span className="select">
        {english ? "Select challenge" : "Seleccionar desafío"}
        <select
          defaultValue={checkPathname()}
          onChange={(e) => triggerPageChange(e)}
        >
          {projects_data.map((item, index) => {
            const { en, es } = item.name;
            if (item.wip) return;
            return (
              <option key={index} value={english ? `${en}` : `${es}`}>
                {english ? en : es}
              </option>
            );
          })}
        </select>
      </span>
      <div className={style.config_btns}>
        <button className="next-challenge" onClick={nextChallenge}>
          {english ? "Next challenge" : "Siguiente desafío"}
        </button>
        <button onClick={changeLocale}>
          {english ? "Español" : "English"}
        </button>
        <button onClick={() => changeDark()}>
          {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </header>
  );
};
export default Header;
