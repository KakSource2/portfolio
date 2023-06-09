import { useOutletContext } from "react-router-dom";
import img_background from "../../assets/backgrounds/david-pisnoy-46juD4zY1XA-unsplash.jpg";
import style from "./main.module.scss";
const Main = () => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  const background = {
    backgroundImage: `url(${img_background})`,
    backgroundSize: "cover",
    backgroundPosition: "cover",
  };

  return (
    <div
      style={background}
      className={dark ? style.main : `${style.main} ${style.light}`}
    >
      <main>
        <h2>
          {english
            ? "The best paintors who are passionate about their job"
            : "Los mejores pintores, estamos apasionados por nuestro trabajo"}
        </h2>
      </main>
    </div>
  );
};
export default Main;
