import { useState } from "react";
import { useEffect } from "react";
import Header from "../../../../Header";
import "./surveyform.css";
const SurveyForm = () => {
  const [english, setEnglish] = useState(false);
  const [isSending, setIsSending] = useState(false);

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

  const setBgColorGreen = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 3000);
  };

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
  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div className="SurveyForm">
        <h2>
          {english
            ? "Welcome to the survey service"
            : "Bienvenido al servicio de encuesta"}
        </h2>
        <p className="little">
          {english
            ? "This is a short survey for FreeCodeCamp"
            : "Esta es una pequeña encuesta por FreeCodeCamp"}
        </p>
        <div className="survey">
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
            <div className="options-recommend">
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
            <div className="options-improved">
              <span>
                <input type="checkbox" className="checkmark" /> Front-End
              </span>
              <span>
                <input type="checkbox" className="checkmark" /> Back-End
              </span>
            </div>
          </div>
          <div className="comments">
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
    </>
  );
};

export default SurveyForm;
