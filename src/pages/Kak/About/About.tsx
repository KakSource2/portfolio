import style from "./about.module.scss";
import me from "../assets/me.png";
import icon_linkedin from "../assets/icons/linkedin.png";

const About = ({ english, dark }: { english: boolean; dark: boolean }) => {
  return (
    <article className={dark ? style.about : `${style.about} ${style.light}`}>
      <div className={style.details}>
        {english ? (
          <h1>
            Hi, I'm <b>Gaston.</b>
          </h1>
        ) : (
          <h1>
            Hola, Soy <b>Gastón.</b>
          </h1>
        )}
        <p>
          {!english
            ? "Tengo 27 años y me gusta programar, he creado multiples apps web que estoy incorporando a este portfolio."
            : "I am 27 years old and like programming, I've built multiple web apps that now I'm incorporating into this portfolio."}
        </p>
        <div className={style.btns}>
          <a href="https://www.linkedin.com/in/gaston-bernardez-64437b209/">
            <p>{english ? "Contact" : "Contacto"}</p>
            <img src={icon_linkedin} />
          </a>
          <a href="#apps">
            <p className="projects">{english ? "Projects" : "Proyectos"}</p>
          </a>
        </div>
      </div>
      <img className={style.photo} src={me} />
    </article>
  );
};

export default About;
