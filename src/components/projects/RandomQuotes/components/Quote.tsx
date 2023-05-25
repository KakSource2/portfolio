import "./Quote.css";

let Quote = ({ quote }: { quote: string }) => {
  const font_color_random = {
    color: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.random() * 1 + 0.5})`,
  };

  return (
    <p style={font_color_random} className="Quote">
      {quote}
    </p>
  );
};

export default Quote;
