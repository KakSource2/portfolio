import "./interactiverating.css";
import icon_star from "./assets/icon-star.svg";
import icon_thank_you from "./assets/illustration-thank-you.svg";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const InteractiveRating = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const english = useOutletContext();

  return (
    <div className="InteractiveRating">
      {hasVoted ? (
        <div className="voted">
          <img src={icon_thank_you}></img>
          <span>
            {english ? "You selected X out of 5" : "Has seleccionado X de 5"}
          </span>
          <h2>{english ? "Thank you!" : "Gracias!"}</h2>
          <p>
            {english
              ? "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
              : "Apreciamos que te tomes el tiempo de dar una puntuación. Si en algún momento necesitas ayuda no dude en ponerte en contacto!"}
          </p>
        </div>
      ) : (
        <main>
          <img src={icon_star}></img>
          <h2>{english ? "How did we do?" : "¿Cómo te fue?"}</h2>
          <p>
            {english
              ? "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
              : "Por favor haznos saber que tal te fue en tu pregunta. ¡Todo comentario es apreciado ya que nos ayuda a mejorar nuestro servicio!"}
          </p>
          <div className="rating">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <button onClick={() => setHasVoted(true)} className="submit">
            {english ? "SUBMIT" : "ENVIAR"}
          </button>
        </main>
      )}
    </div>
  );
};

export default InteractiveRating;
