import style from "./home.module.scss";
import { challenges } from "../../data/challenges";
import { Link, useOutletContext } from "react-router-dom";

const Home = () => {
  const english = useOutletContext();

  return (
    <div className={style.home}>
      <h1>
        {english
          ? "Challenges from Front End Mentor!"
          : "¡Desafíos de Front End Mentor!"}
      </h1>
      <div className={style.challenges}>
        {challenges.map((item) => (
          <Link to={item.link}>
            <p>{english ? item.name.en : item.name.es}</p>
            <img src={item.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
