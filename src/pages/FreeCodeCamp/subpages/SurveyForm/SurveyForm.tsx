import { useState } from "react";
import style from "./surveyform.module.scss";
import { useOutletContext } from "react-router-dom";

const SurveyForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  const setBgColorGreen = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 3000);
  };

  return (
    <div
      className={dark ? style.surveyform : `${style.surveyform} ${style.light}`}
    >
      <h2>
        {english
          ? "Welcome to the survey service"
          : "Bienvenido al servicio de encuesta"}
      </h2>
      <h4 className="little">
        {english
          ? "This is a short survey for FreeCodeCamp"
          : "Esta es una pequeña encuesta por FreeCodeCamp"}
      </h4>
      <div className={style.survey}>
        <div>
          <p>{english ? "Name" : "Nombre"}</p>
          <input
            type="text"
            placeholder={english ? "Enter your name" : "Pon tu nombre aquí"}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder={
              english ? "Write your email here..." : "Escribe tu mail aquí"
            }
          />
        </div>
        <div>
          <p>{english ? "Age (optional)" : "Edad (opcional)"}</p>
          <input
            type="text"
            placeholder={english ? "Put your age here" : "Pon tu edad aquí"}
          />
        </div>
        <div>
          <p>
            {english
              ? "Which option describes you better?"
              : "Que opción te describe mejor?"}
          </p>
          <select>
            <option value="Student">
              {english ? "Student" : "Estudiante"}
            </option>
            <option value="Student">Semi-Senior</option>
            <option value="Student">Senior</option>
          </select>
        </div>
        <div>
          <p>
            {english
              ? "Would you recommend FreeCodeCamp.org?"
              : "¿Recomendarías FreeCodeCamp.org?"}
          </p>
          <div className={style.commend}>
            <span>
              <input className="checkmark" type="checkbox" />{" "}
              {english ? "Definetely" : "Definitivamente"}
            </span>
            <span>
              <input className="checkmark" type="checkbox" />{" "}
              {english ? "I'm not sure" : "No estoy seguro"}
            </span>
            <span>
              <input className="checkmark" type="checkbox" />{" "}
              {english ? "Not doing it" : "No lo haré"}
            </span>
          </div>
        </div>
        <div>
          <p>
            {english
              ? "What would you like to see improved?"
              : "¿Qué te gustaría ver mejorado?"}
          </p>
          <div className="improve">
            <span>
              <input type="checkbox" className="checkmark" /> Front-End
            </span>
            <span>
              <input type="checkbox" className="checkmark" /> Back-End
            </span>
          </div>
        </div>
        <div className={style.comments}>
          <p>{english ? "Additional Comments" : "Comentarios adicionales"}</p>
          <input type="text" />
        </div>
        <button
          style={isSending ? { backgroundColor: "green" } : {}}
          onClick={setBgColorGreen}
        >
          {english ? "Submit!" : "¡Enviar!"}
        </button>
      </div>
    </div>
  );
};

export default SurveyForm;
