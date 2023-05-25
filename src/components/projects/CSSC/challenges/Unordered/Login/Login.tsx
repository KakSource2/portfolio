import Header from "../../../../Header";
import "./login.css";
import bg_darkmoon from "./assets/darkmoon.jpg";
import { useRef, useState } from "react";
import { useEffect } from "react";

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

const Login = () => {
  const [english, setEnglish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(false);
  const [spoiler, setSpoiler] = useState(true);
  const user = useRef({
    username: "",
    password: "",
  });

  useEffect(() => {
    const checkLocale = () => {
      const l = localStorage.getItem("language");
      if (l === "english") {
        setEnglish(true);
      }
      if (l === "spanish") {
        setEnglish(false);
      }
    };
    checkLocale();
  }, []);

  const changeLocale = () => {
    if (!english) {
      localStorage.setItem("language", "english");
      setEnglish(true);
    }
    if (english) {
      localStorage.setItem("language", "spanish");
      setEnglish(false);
    }
  };

  const checkDetails = () => {
    let doesUserExist = users.find(
      (item) => item.username === user.current.username
    );
    if (doesUserExist?.password === user.current.password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLogged(true);
        setTimeout(() => {
          setLogged(false);
        }, 3000);
      }, 3000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setError(true);
        setLoading(false);
        setTimeout(() => {
          setError(false);
          setLogged(false);
        }, 3000);
      }, 3000);
    }
  };

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div style={background} className="Login">
        {logged ? (
          `${
            english
              ? "You have logged in! You will return in 3..."
              : "Has accedido, retornarás en 3..."
          }`
        ) : (
          <main>
            <span>
              <p>{english ? "Username" : "Nombre de usuario"}</p>
              <input
                type="text"
                onChange={(e) => (user.current.username = e.target.value)}
              />
            </span>
            <span>
              <p>{english ? "Password" : "Contraseña"}</p>
              <input
                type="text"
                onChange={(e) => (user.current.password = e.target.value)}
              />
            </span>
            {error ? (
              <button className="error" disabled onClick={() => checkDetails()}>
                {english ? "Credentials error" : "Error de credenciales"}
              </button>
            ) : (
              <button onClick={() => checkDetails()}>
                {loading
                  ? `${english ? "Loading..." : "Cargando..."}`
                  : `${english ? "Login" : "Acceso"}`}
              </button>
            )}
            <div className="credentials">
              <p>
                {english
                  ? "Credentials that work"
                  : "Credenciales que funcionan"}
                :
              </p>
              {!spoiler ? (
                <>
                  {users.map((item) => (
                    <div className="item">
                      <p>
                        {english ? "Username" : "Nombre de usuario"}:{" "}
                        {item.username}
                      </p>
                      <p>
                        {english ? "Password" : "Contraseña"}: {item.password}
                      </p>
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
    </>
  );
};

export default Login;
