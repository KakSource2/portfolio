import "./Project.css";
import { Link } from "react-router-dom";
import background_shifter from "./assets/background-shifter.png";
import random_weathers from "./assets/random_weathers.png";
import tribute_page from "./assets/tribute-page.png";
import survey_form from "./assets/survey-form.png";
import results_summary from "./assets/results-summary.png";
import interactive_rating from "./assets/interactive-rating.png";

type Apps = {
  Apps: {
    name: {
      es: string;
      en: string;
    };
    link: string;
    styleObj: {
      background: string;
      backgroundSize: string;
      backgroundPosition: string;
    };
  }[];
};

const Apps: Apps = {
  Apps: [
    {
      name: {
        es: "Cambia fondo",
        en: "Background shifter",
      },
      link: "background-shifter",
      styleObj: {
        background: `url(${background_shifter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      name: {
        es: "Clima aleatorio",
        en: "Random weather",
      },
      link: "random-weather",
      styleObj: {
        background: `url(${random_weathers})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      },
    },
    {
      name: {
        es: "Sumario del resultado",
        en: "Results summary",
      },
      link: "results-summary",
      styleObj: {
        background: `url(${results_summary})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      name: {
        es: "Puntuación interactiva",
        en: "Interactive rating",
      },
      link: "interactive-rating",
      styleObj: {
        background: `url(${interactive_rating})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      name: {
        es: "Página tributo",
        en: "Tribute page",
      },
      link: "fcc-tribute-page",
      styleObj: {
        background: `url(${tribute_page})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      name: {
        es: "Formulario encuesta",
        en: "Survey form",
      },
      link: "fcc-survey-form",
      styleObj: {
        background: `url(${survey_form})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    // {
    //   name: {
    //     es: "Películas TMDB",
    //     en: "Movies TMDB",
    //   },
    //   link: "movies-tmdb",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Lista de quehaceres",
    //     en: "To do list",
    //   },
    //   link: "/to-do-list",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Barra de búsqueda",
    //     en: "Search bar",
    //   },
    //   link: "/search-bar",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Reflexiones aleatorias",
    //     en: "Random reflections",
    //   },
    //   link: "/random-reflections",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Generador de memes",
    //     en: "Meme generator",
    //   },
    //   link: "/meme-generator",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Frases aleatorias",
    //     en: "Random quotes",
    //   },
    //   link: "/random-quotes",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Dados",
    //     en: "Dices",
    //   },
    //   link: "/dice",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Reproductor de música",
    //     en: "Music Player",
    //   },
    //   link: "/music-player",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Mazo de tarot",
    //     en: "Tarot Deck",
    //   },
    //   link: "/tarot",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
    // {
    //   name: {
    //     es: "Tetris",
    //     en: "Tetris",
    //   },
    //   link: "/tetris",
    //   styleObj: {
    //     background: `url(${""})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   },
    // },
  ],
};

const Projects = ({ english }: { english: boolean }) => {
  return (
    <article id="apps" className="Projects">
      <span>
        <p>{"</>"}</p>
        <p>{!english ? "Apps que he hecho" : "Apps I've built"}</p>
      </span>
      <div className="apps">
        {Apps.Apps.map((item, index) => (
          <Link key={index} style={item.styleObj} to={item.link}>
            {english ? `${item.name.en}` : `${item.name.es}`}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Projects;
