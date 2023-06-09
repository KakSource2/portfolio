import style from "./skills.module.scss";
import icon_html from "./assets/html-5.png";
import icon_css from "./assets/css-3.png";
import icon_javascript from "./assets/js.png";
import icon_reactjs from "./assets/physics.png";
import icon_nodejs from "./assets/nodejs.png";
import icon_typescript from "./assets/typescript.png";
import axios from "./assets/axios.png";
import pocketbase from "./assets/pocketbase.png";
import webdriverio from "./assets/webdriverio.svg";

type skills = {
  name: string;
  icon?: string;
}[];

const skills: skills = [
  { name: "HTML", icon: icon_html },
  { name: "CSS", icon: icon_css },
  { name: "JavaScript", icon: icon_javascript },
  { name: "Axios", icon: axios },
  { name: "WebDriverIO", icon: webdriverio },
  { name: "Node.JS", icon: icon_nodejs },
  { name: "React.JS", icon: icon_reactjs },
  { name: "PocketBase", icon: pocketbase },
  { name: "TypeScript", icon: icon_typescript },
];

const Skills = ({ english, dark }: { english: boolean; dark: boolean }) => {
  return (
    <article
      id="skills"
      className={dark ? style.skills : `${style.skills} ${style.light}`}
    >
      <h2>{!english ? "HABILIDADES" : "SKILLS"}</h2>
      <div className={style.list}>
        {skills.map((item, index) => {
          return (
            <div key={index}>
              {item.icon && <img src={item.icon} />}
              {item.name.length >= 8 ? (
                <p style={{ fontSize: "1rem" }}>{item.name}</p>
              ) : (
                <p>{item.name}</p>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Skills;
