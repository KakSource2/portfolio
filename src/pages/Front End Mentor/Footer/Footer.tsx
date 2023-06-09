import { Link } from "react-router-dom";
import style from "./footer.module.scss";

const Footer = ({ english }: { english: boolean }) => {
  return (
    <div className={style.footer}>
      <h3>
        <Link to="https://www.frontendmentor.io/home">
          {english
            ? "Challenges by Front End Mentor!"
            : "¡Desafíos por Front End Mentor!"}
        </Link>
      </h3>
    </div>
  );
};
export default Footer;
