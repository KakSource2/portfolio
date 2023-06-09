import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./login.css";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const english = useOutletContext();
  let token_tmdb = null;
  const navigate = useNavigate();

  useEffect(() => {
    token_tmdb = localStorage.getItem("token_tmdb");
    if (token_tmdb) navigate("/tmdb/listings");
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      return swal({
        text: english
          ? "Fields cannot be empty!"
          : "Los campos no pueden estar vacíos!",
        icon: "error",
      });
    }
    if (!regexEmail.test(email)) {
      return swal({
        text: english
          ? "Email doesn't meet the requirements"
          : "El email no cumple los requisitos",
        icon: "error",
      });
    }

    if (email !== "challenge@alkemy.org" && password !== "react") {
      return swal({
        text: english ? "Bad credentials" : "Credenciales erróneas",
        icon: "error",
      });
    }

    await axios
      .post("http://challenge-react.alkemy.org", {
        email,
        password,
      })
      .then((res) => {
        swal({
          text: english
            ? "You have logged in! You will redirected after this popup"
            : "Has accedido! Serás redireccionado al aceptar.",
          icon: "success",
        });
        const token = res.data.token;
        localStorage.setItem("token_tmdb", token);
      })
      .catch((err) => {
        console.log(err);
        swal({
          text: english
            ? "There was some error while accesing the API"
            : "Hubo un error al acceder al Api!",
          icon: "error",
        });
      });

    return navigate("/tmdb/listings");
  };

  return (
    <div className="Movies-login">
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          <span>{english ? "Username" : "Correo electrónico"}</span>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span>{english ? "Password" : "Contraseña"}</span>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">{english ? "Login" : "Ingresar"}</button>
      </form>
    </div>
  );
};

export default Login;
