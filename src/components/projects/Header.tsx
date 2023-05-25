import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo-kak.png";
import projects from "./projects";

const Header = ({
  changeLocale,
  english,
}: {
  changeLocale: () => void;
  english: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const triggerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    projects.find((item) => {
      const { es, en } = item.name;
      if (es === e.target.value || en === e.target.value) {
        return navigate(item.link);
      }
    });
  };

  const nextChallenge = () => {
    if (location.pathname === projects[projects.length - 1].link) {
      return navigate(projects[0].link);
    }
    projects.find((item) => {
      if (item.link === location.pathname) {
        navigate(projects[item.id].link);
      }
    });
  };

  return (
    <header className="challenge-header">
      <img src={logo} />
      <Link to={`${window.location.origin}/portfolio`}>
        {english ? "Back to Portfolio" : "Volver al Portafolio"}
      </Link>
      <span className="select">
        {english ? "Select challenge" : "Seleccionar desafío"}
        <select onChange={(e) => triggerPageChange(e)}>
          {projects.map((item, index) => {
            const { en, es } = item.name;
            return (
              <option key={index} value={english ? `${en}` : `${es}`}>
                {english ? en : es}
              </option>
            );
          })}
        </select>
      </span>
      <div className="config-btns">
        <button className="next-challenge" onClick={nextChallenge}>
          {english ? "Next challenge" : "Siguiente desafío"}
        </button>
        <button onClick={changeLocale}>
          {english ? "Español" : "English"}
        </button>
      </div>
    </header>
  );
};
export default Header;
