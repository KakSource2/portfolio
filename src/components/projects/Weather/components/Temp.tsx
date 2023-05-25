let Temp = ({ temp }: { temp: number }) => {
  const temp_colors = () => {
    if (temp < 9) return { color: `rgb(0, 195, 255)` };
    if (temp < 6) return { color: `rgb(0, 185, 255)` };
    if (temp < 4) return { color: `rgb(0, 165, 255)` };
    if (temp < 2) return { color: `rgb(0, 145, 255)` };
    if (temp < 0) return { color: `rgb(255, 255, 255)` };
    if (temp > 32) return { color: `rgb(255, 121, 59)` };
    if (temp > 36) return { color: `rgb(255, 84, 46)` };
    if (temp > 38) return { color: `rgb(255, 34, 0)` };
  };
  return (
    <span style={temp_colors()} className="temp">
      {temp}º
    </span>
  );
};

export default Temp;
