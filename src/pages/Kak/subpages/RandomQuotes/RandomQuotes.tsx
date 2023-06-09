import "./styles.css";
import { useState } from "react";
import data_Quotes from "./data/quotes";
import Quote from "./components/Quote";
import { useOutletContext } from "react-router-dom";

let RandomQuotes = () => {
  const [quote, setQuote] = useState<{ quote: string; key: number }>({
    quote: "",
    key: 0,
  });
  const english = useOutletContext();

  let changer = () => {
    let RNG = Math.floor(Math.random() * data_Quotes.length);
    if (english) {
      while (data_Quotes[RNG].quote_en === "") {
        RNG = Math.floor(Math.random() * data_Quotes.length);
      }
      if (data_Quotes[RNG].author) {
        return setQuote({
          quote: `${data_Quotes[RNG].quote_en} - ${data_Quotes[RNG].author}.`,
          key: data_Quotes[RNG].id,
        });
      } else
        return setQuote({
          quote: `${data_Quotes[RNG].quote_en}`,
          key: data_Quotes[RNG].id,
        });
    }

    if (!english) {
      while (data_Quotes[RNG].quote_es === "") {
        RNG = Math.floor(Math.random() * data_Quotes.length);
      }
      if (data_Quotes[RNG].author) {
        return setQuote({
          quote: `${data_Quotes[RNG].quote_es} - ${data_Quotes[RNG].author}.`,
          key: data_Quotes[RNG].id,
        });
      } else
        return setQuote({
          quote: `${data_Quotes[RNG].quote_es}`,
          key: data_Quotes[RNG].id,
        });
    }
  };

  return (
    <div className="QuoteGenerator">
      {english ? (
        <button onClick={() => changer()} className="btn__random-quote">
          RANDOM QUOTE
        </button>
      ) : (
        <button onClick={() => changer()} className="btn__random-quote">
          FRASE ALEATORIA
        </button>
      )}
      <Quote key={quote.key} quote={quote.quote} />
    </div>
  );
};

export default RandomQuotes;
