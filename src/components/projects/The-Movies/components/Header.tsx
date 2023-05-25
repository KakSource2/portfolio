import "../styles/header.css";

const MoviesHeader = ({
  funcHandlers,
}: {
  funcHandlers: { login: () => void };
}) => {
  // const token = localStorage.getItem("token");

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   window.location.href = window.location.origin + "/login";
  // };

  return (
    <ul className="Movies-navbar">
      <p className="logo">
        MT<b>DB</b>
      </p>
      <button onClick={funcHandlers.login}>Login</button>
      <button>Listado</button>
      <button>Contacto</button>
      <button>Logout</button>
    </ul>
  );
};

export default MoviesHeader;
