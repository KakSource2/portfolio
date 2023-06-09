import { Link } from "react-router-dom";
import logo_kak from "../assets/logos/logo-kak.png";
import style from "./footer.module.scss";

const Footer = ({ english, dark }: { english: boolean; dark: boolean }) => {
  return (
    <div className={dark ? style.footer : `${style.footer} ${style.light}`}>
      <p>
        {english ? "Challenges made by" : "Desafíos hechos por"}{" "}
        <Link to="https://www.freecodecamp.org/">FreeCodeCamp</Link>
      </p>
      <Link to={"/"}>
        <img src={logo_kak} />
      </Link>
    </div>
  );
};
export default Footer;
