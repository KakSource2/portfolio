import icon_wind from "../assets/icons/windy.png";
const Winds = ({ wind, english }: { wind: number; english: boolean }) => {
  const wind_colors = () => {
    if (wind >= 119 && wind <= 153) {
      return { backgroundColor: "rgb(255, 220, 63)" };
    }
    if (wind >= 154 && wind <= 177) {
      return { backgroundColor: "rgb(255, 137, 63)" };
    }
    if (wind >= 178 && wind <= 208) {
      return { backgroundColor: "rgb(255, 35, 35)" };
    }
    return { backgroundColor: "rgba(255, 220, 63,0.01)" };
  };

  const icon = () => {
    if (wind >= 119) return <img src={icon_wind}></img>;
  };

  return (
    <span style={wind_colors()}>
      <p>
        <b>{english ? "Winds" : "Vientos"}</b>{" "}
        {english ? `at ${wind}km/h` : `de ${wind}km/h`}
      </p>
      {icon()}
    </span>
  );
};

export default Winds;
