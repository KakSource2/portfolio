import { Link, useOutletContext } from "react-router-dom";
import { projects } from "../../data/projects";
import style from "./main.module.scss";

const Main = () => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  return (
    <div
      className={
        dark ? style.freecodecamp : `${style.freecodecamp} ${style.light}`
      }
    >
      <main>
        {projects.map((item) => (
          <div key={item.id}>
            <Link to={item.link}>
              <p>{english ? item.name.en : item.name.es}</p>
              <img src={item.img} />
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Main;
