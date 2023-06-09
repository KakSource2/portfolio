import { useOutletContext } from "react-router-dom";
import projects_data from "../data/projects";
import style from "./home.module.scss";

const home = () => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  return (
    <div className={dark ? style.home : `${style.home} ${style.light}`}>
      <main>
        {projects_data.map((item) => (
          <div key={item.id}>
            <h2>{english ? item.name.en : item.name.es}</h2>
          </div>
        ))}
      </main>
    </div>
  );
};
export default home;
