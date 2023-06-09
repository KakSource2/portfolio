import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import Search from "./Search";

const MoviesHeader = ({
  english,
  changeEnglish,
}: {
  english: boolean;
  changeEnglish: () => void;
}) => {
  const navigation = useNavigate();

  const token = localStorage.getItem("token_tmdb");

  const logout = () => {
    localStorage.removeItem("token_tmdb");
    navigation("login");
  };

  return (
    <ul className="Movies-navbar">
      <p className="logo">
        TM<b>DB</b>
      </p>
      <div className="nav__buttons">
        {!token && (
          <Link to="login">
            <span>Login</span>
          </Link>
        )}
        {token && (
          <Link to="listings">
            <span>{english ? "Listing" : "Listado"}</span>
          </Link>
        )}

        <Link to="contact">
          <span>{english ? "Contact" : "Contacto"}</span>
        </Link>

        {token && (
          <button onClick={() => logout()}>
            {english ? "Logout" : "Cerrar sesión"}
          </button>
        )}
      </div>
      <button onClick={() => changeEnglish()}>
        {english ? "Cambiar a español" : "Change to english"}
      </button>
      <Search />
    </ul>
  );
};

export default MoviesHeader;
