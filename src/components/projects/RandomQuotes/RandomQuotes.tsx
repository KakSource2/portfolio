import "./styles.css";
import { useEffect, useState } from "react";
import data_Quotes from "./data/quotes";
import Quote from "./components/Quote";
import Header from "../Header";

let RandomQuotes = () => {
  const [english, setEnglish] = useState(true);
  const [quote, setQuote] = useState<{ quote: string; key: number }>({
    quote: "",
    key: 0,
  });
  useEffect(() => {
    const checkLocale = () => {
      const l = localStorage.getItem("language");
      if (l === "english") {
        setEnglish(true);
      }
      if (l === "spanish") {
        setEnglish(false);
      }
    };
    checkLocale();
  }, []);

  const changeLocale = () => {
    if (!english) {
      localStorage.setItem("language", "english");
      setEnglish(true);
    }
    if (english) {
      localStorage.setItem("language", "spanish");
      setEnglish(false);
    }
  };

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
    <>
      <Header changeLocale={changeLocale} english={english} />
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
    </>
  );
};

export default RandomQuotes;
