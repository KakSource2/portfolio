import { useState } from "react";
import LastNumber from "./components/LastNumbers";
import dice from "./assets/dice.png";
import broom from "./assets/broom.png";
import "./styles.css";
import { useOutletContext } from "react-router-dom";

let DiceSimulator = () => {
  const [diceAnimation, setDiceAnimation] = useState(false);
  const [RNG, setRNG] = useState<number>(0);
  const [lastNumbersGenerated, setLastNumbersGenerated] = useState<number[]>(
    []
  );
  const english = useOutletContext();
  const [numberOfFaces, setNumberOfFaces] = useState<number>(6);

  let newNumber: number;

  let throwDice = () => {
    setDiceAnimation(true);
    setTimeout(() => {
      setDiceAnimation(false);
    }, 500);
    newNumber = Math.floor(Math.random() * numberOfFaces + 1);
    setRNG(newNumber);
    if (lastNumbersGenerated.length >= 30) {
      setLastNumbersGenerated((prevArr) => {
        prevArr.shift();
        return [...prevArr, newNumber];
      });
    } else {
      setLastNumbersGenerated((prevArr) => {
        return [...prevArr, newNumber];
      });
    }
  };

  let handleNumberOfFaces = (e: any) => {
    setNumberOfFaces(e.target.value);
  };

  return (
    <div className="DiceSimulator">
      <main>
        <div className="selection">
          <div>
            <h5>{english ? "Faces number" : "Número de caras"}</h5>
            <select onChange={(e) => handleNumberOfFaces(e)}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <button
          className={diceAnimation ? "diceAnim dice" : "dice"}
          onClick={() => throwDice()}
        >
          <img src={dice} />
        </button>
        <div className="number">
          <p>{RNG}</p>
        </div>
        <div className="history">
          <button onClick={() => setLastNumbersGenerated([])}>
            <img src={broom} />
          </button>
          <div className="last-numbers-generated">
            {lastNumbersGenerated.map((item, index) => (
              <LastNumber key={index} number={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiceSimulator;
