import rain from "../assets/icons/rain.png";
import "../styles/precipitation.css";

let Precipitation = ({
  english,
  precipitation,
}: {
  english: boolean;
  precipitation: number;
}) => {
  const precipitation_icon = () => {
    if (precipitation >= 70) return <img width={"25px"} src={rain} />;
  };

  const precipitation_background = () => {
    if (precipitation >= 70) return { backgroundColor: "rgb(49, 51, 55)" };
  };

  return (
    <span style={precipitation_background()} className="rain">
      <p>
        {english ? "Precipitation" : "Precipitaciones"}: {precipitation}%{" "}
      </p>
      {precipitation_icon()}
    </span>
  );
};

export default Precipitation;
