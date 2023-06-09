import styled from "styled-components";

const Main = styled.main`
  display: grid;
  justify-items: center;
  margin-inline: 5vw;
`;

const Score = styled.h2`
  text-align: center;
`;

const Game = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  width: 100%;
  border: 1px solid black;
`;

export { Main, Score, Game, Box };
