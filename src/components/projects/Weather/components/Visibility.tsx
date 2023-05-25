import icon_visible from "../assets/icons/visible.png";
let Visibility = ({
  visibility,
  english,
}: {
  visibility: number;
  english: boolean;
}) => {
  const icon = () => {
    if (visibility <= 30) {
      return <img src={icon_visible}></img>;
    }
  };

  const background = () => {
    if (visibility <= 30 && visibility >= 25) {
      return { backgroundColor: "var(--alert-green)", color: "black" };
    }
    if (visibility <= 25 && visibility >= 20) {
      return { backgroundColor: "var(--alert-yellow)", color: "black" };
    }
    if (visibility <= 20 && visibility >= 10) {
      return { backgroundColor: "var(--alert-orange)", color: "black" };
    }
    if (visibility <= 10 && visibility >= 0) {
      return { backgroundColor: "var(--alert-red)", color: "white" };
    }
    return {};
  };

  return (
    <span style={background()}>
      <p>
        {english ? "Visibility" : "Visibilidad"}: {visibility}%
      </p>
      {icon()}
    </span>
  );
};

export default Visibility;
