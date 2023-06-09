import { Link } from "react-router-dom";
import Apps_data from "./data/apps";
import styles from "./projects.module.scss";

const Projects = ({ english, dark }: { english: boolean; dark: boolean }) => {
  return (
    <article
      id="apps"
      className={dark ? styles.article : `${styles.article} ${styles.light}`}
    >
      <span className={styles.p1}>{"</>"}</span>
      <span className={styles.p2}>
        {!english ? "Apps que he hecho" : "Apps I've built"}
      </span>
      <main>
        {Apps_data.map((item) => (
          <Link title={item.title} key={item.id} to={item.link}>
            <p style={item.style}>{item.name}</p>
            <img src={item.img}></img>
          </Link>
        ))}
      </main>
    </article>
  );
};

export default Projects;
