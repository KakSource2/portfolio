import "./Quote.css";

let Quote = ({ quote }: { quote: string }) => {
  const r = () => Math.floor(Math.random() * 255);

  const style = {
    fontSize: "",
    color: `rgba(${r},${r},${r},${Math.random() * 1})`,
  };

  if (quote.length >= 100) {
    style.fontSize = "1.4rem";
  }

  if (quote.length >= 200) {
    style.fontSize = "1.2rem";
  }

  return (
    <p style={style} className="Quote">
      {quote}
    </p>
  );
};

export default Quote;
