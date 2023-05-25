import { useState } from "react";
import { useEffect } from "react";
import Header from "../../../../Header";

const ProductPreviewCard = () => {
  const [english, setEnglish] = useState(false);

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

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div>
        <img src={""} />
        <div>
          <p>category</p>
          <h2>Title</h2>
          <p></p>
          <div>
            <span>$price</span> if discount <span>original price</span>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default ProductPreviewCard;
