import { useRef, useState } from "react";
import "./BackgroundShifter.css";
import { useOutletContext } from "react-router-dom";

type background = {
  backgroundColor: string;
};

let BackgroundShifter = () => {
  const [changes, setChanges] = useState<number>(0);
  const currStyle = useRef<background>({
    backgroundColor: "rgba(255,255,255,1)",
  });
  const [currOption, setCurrOption] = useState("rgba");
  document.title = "Background Shifter";
  const english = useOutletContext();

  const background_changer = () => {
    let color_rng = () => Math.floor(Math.random() * 255);
    let opacity_rng = () => (Math.random() * 1).toString().slice(0, 5);
    const hsl_rng = () => Math.floor(Math.random() * 360);
    const percent_rng = () => Math.floor(Math.random() * 100);

    if (currOption === "rgb") {
      currStyle.current = {
        backgroundColor: `rgb(${color_rng()},${color_rng()},${color_rng()})`,
      };
    }

    if (currOption === "rgba") {
      currStyle.current = {
        backgroundColor: `rgba(${color_rng()},${color_rng()},${color_rng()},${opacity_rng()})`,
      };
    }

    if (currOption === "hsl") {
      currStyle.current = {
        backgroundColor: `hsl(${hsl_rng()}, ${percent_rng()}%, ${percent_rng()}%)`,
      };
    }
    if (currOption === "hsla") {
      currStyle.current = {
        backgroundColor: `hsla(${hsl_rng()}, ${percent_rng()}%, ${percent_rng()}%, ${percent_rng()}%)`,
      };
    }
    setChanges((prev) => prev + 1);
  };

  return (
    <div style={currStyle.current} className="BackgroundShifter">
      <main>
        <div className="settings">
          <button
            className={currOption == "rgb" ? "active" : ""}
            onClick={() => setCurrOption("rgb")}
          >
            RGB
          </button>{" "}
          <button
            className={currOption == "rgba" ? "active" : ""}
            onClick={() => setCurrOption("rgba")}
          >
            RGBA
          </button>{" "}
          <button
            className={currOption == "hsl" ? "active" : ""}
            onClick={() => setCurrOption("hsl")}
          >
            HSL
          </button>{" "}
          <button
            className={currOption == "hsla" ? "active" : ""}
            onClick={() => setCurrOption("hsla")}
          >
            HSLA
          </button>
        </div>
        <button className="shift" onClick={() => background_changer()}>
          {english ? "SHIFT" : "CAMBIAR"}
        </button>
        <span>
          {english
            ? `Background had changed: ${changes} ${
                changes === 1 ? "time" : "times"
              }`
            : `El fondo ha cambiado: ${changes} ${
                changes === 1 ? "vez" : "veces"
              } `}
        </span>
        <span className="output">{currStyle.current.backgroundColor}</span>
      </main>
    </div>
  );
};

export default BackgroundShifter;
