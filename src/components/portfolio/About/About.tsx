import "./About.css";
import me from "./me.png";
import icon_linkedin from "./linkedin.png";

const About = ({ english }: { english: boolean }) => {
  const redirect = () => {
    window.location.href =
      "https://www.linkedin.com/in/gaston-ignacio-bernardez-64437b209/";
  };

  return (
    <article className="About">
      <div className="details">
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
        <div className="about-btns">
          <button onClick={redirect}>
            {english ? "Contact" : "Contacto"}
            <img src={icon_linkedin} />
          </button>
          <a href="#apps">
            <p className="projects">{english ? "Projects" : "Proyectos"}</p>
          </a>
        </div>
      </div>
      <img src={me} />
    </article>
  );
};

export default About;
