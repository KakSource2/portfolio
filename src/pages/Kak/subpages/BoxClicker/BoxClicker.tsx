import { useState } from "react";
import { Main, Score, Game, Box } from "./styles";

const BoxClicker = () => {
  const [gameState, setGameState] = useState("start");
  // const [score, setScore] = useState(0);

  const GameHandler = () => {
    // let changeTime: number = 10000;

    let boxes = [
      { id: 1, style: {} },
      { id: 2, style: {} },
      { id: 3, style: {} },
      { id: 4, style: {} },
      { id: 5, style: {} },
      { id: 6, style: {} },
      { id: 7, style: {} },
      { id: 8, style: {} },
      { id: 9, style: {} },
      { id: 10, style: {} },
    ];

    // setInterval(() => {
    //   let r = Math.floor(Math.random() * boxes.length)
    // }, changeTime);

    return (
      <Main>
        <Score>Score: {123}</Score>
        <Game>
          {boxes.map((item) => (
            <Box key={item.id}>{item.id}</Box>
          ))}
        </Game>
      </Main>
    );
  };

  return (
    <div className="Box__Clicker">
      {gameState === "start" && (
        <div className="start">
          <button onClick={() => setGameState("game")}>START</button>
        </div>
      )}
      {gameState === "game" && GameHandler()}
    </div>
  );
};
export default BoxClicker;
