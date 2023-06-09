import icon_humidity from "../assets/icons/humidity.png";
let Humidity = ({
  humidity,
  english,
}: {
  humidity: number;
  english: boolean;
}) => {
  const icon = () => {
    if (humidity > 70) return <img src={icon_humidity}></img>;
  };
  const background = () => {
    if (humidity >= 80) return { backgroundColor: "lightblue" };
  };

  return (
    <span style={background()}>
      <p>
        {english ? "Humidity" : "Humedad"}: {humidity}%
      </p>
      {icon()}
    </span>
  );
};

export default Humidity;
