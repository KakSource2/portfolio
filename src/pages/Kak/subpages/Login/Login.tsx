import "./login.css";
import { useState } from "react";
import bg_darkmoon from "./assets/darkmoon.jpg";
import { useOutletContext } from "react-router-dom";

const background = {
  background: `url(${bg_darkmoon})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
};

const users: { username: string; password: string }[] = [
  {
    username: "pepito",
    password: "pepitox123",
  },
  {
    username: "kaksource",
    password: "asddsa123",
  },
];

type error =
  | {
      text: { en: string; es: string };
    }
  | false;

type user = {
  username: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState<error>(false);
  const [spoiler, setSpoiler] = useState<boolean>(true);
  const [user, setUser] = useState<user>({ username: "", password: "" });
  const english = useOutletContext();

  const check_user = () => {
    const f1 = users.find((item) => item.username === user.username);
    const f2 = users.find((item) => item.password === user.password);
    if (!f1 || !f2) return false;
    return true;
  };

  const checkDetails = () => {
    if (user.username === "") {
      setError({
        text: { en: "Username is empty", es: "Nombre de usuario vacío" },
      });
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    if (user.password === "") {
      setError({
        text: { en: "Password is empty", es: "Escribe una contraseña" },
      });
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    if (!check_user()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setError({
          text: { en: "Bad credentials", es: "Credenciales erróneas" },
        });
        setTimeout(() => {
          setError(false);
        }, 3000);
      }, 3000);
    }

    if (check_user()) {
      setLoading(true);
      setTimeout(() => {
        setLogged(true);
        setTimeout(() => {
          setLogged(false);
        }, 3000);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div style={background} className="Login">
      {logged ? (
        <span className="logged">
          {english
            ? "You have logged in! You will return in 3..."
            : "Has accedido, retornarás en 3..."}
        </span>
      ) : (
        <main>
          <span>
            <p>{english ? "Username" : "Nombre de usuario"}</p>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </span>
          <span>
            <p>{english ? "Password" : "Contraseña"}</p>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </span>
          {error ? (
            <button className="error" disabled onClick={() => checkDetails()}>
              {english ? error.text.en : error.text.es}
            </button>
          ) : (
            <button onClick={() => checkDetails()}>
              {loading
                ? `${english ? "Loading..." : "Cargando..."}`
                : `${english ? "Login" : "Acceso"}`}
            </button>
          )}
          <div className="credentials">
            {!spoiler ? (
              <>
                {users.map((item, index) => (
                  <div key={index} className="item">
                    <p>{item.username}</p>
                    <p>{item.password}</p>
                  </div>
                ))}
                <button onClick={() => setSpoiler((prev) => !prev)}>
                  Hide
                </button>
              </>
            ) : (
              <button onClick={() => setSpoiler((prev) => !prev)}>
                Spoiler
              </button>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default Login;
