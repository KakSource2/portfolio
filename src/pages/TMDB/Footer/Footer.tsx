import "./Footer.css";
import icon_linkedin from "../assets/linkedin.png";
import logo_tmdb from "../assets/TMDB.png";

const Footer = () => {
  return (
    <footer className="Movies-footer">
      <main>
        <a
          href="https://www.linkedin.com/in/gaston-ignacio-bernardez-64437b209/"
          rel="noopener noreferrer"
        >
          <img src={icon_linkedin} />
        </a>
        <a className="tmdb" href="https://www.themoviedb.org/">
          <img src={logo_tmdb} />
        </a>
      </main>
      <p>© Alkemy Challenge</p>
    </footer>
  );
};

export default Footer;
