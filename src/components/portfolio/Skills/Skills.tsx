import "./Skills.css";
import check from "./check.png";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.JS",
  "React.JS",
  "Axios",
  "Next.JS",
  "WebDriverIO",
  "PocketBase",
];

const Skills = ({ english }: { english: boolean }) => {
  return (
    <article id="skills" className="Skills">
      <h2>{!english ? "HABILIDADES" : "SKILLS"}</h2>
      <div className="known">
        {skills.map((item, index) => (
          <div key={index}>
            <img src={check} />{" "}
            {item.length >= 8 ? (
              <p style={{ fontSize: "1rem" }}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skills;
