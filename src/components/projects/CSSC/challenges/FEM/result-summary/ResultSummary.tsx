import "./resultsummary.css";
import { useEffect, useState } from "react";

import memory from "./assets/images/icon-memory.svg";
import reaction from "./assets/images/icon-reaction.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";
import Header from "../../../../Header";

type scores = { category: string; score: number }[];

const create_random_score = () => {
  const newScore: scores = [
    {
      category: "Reaction",
      score: Math.floor(Math.random() * 100),
    },
    {
      category: "Memory",
      score: Math.floor(Math.random() * 100),
    },
    {
      category: "Verbal",
      score: Math.floor(Math.random() * 100),
    },
    {
      category: "Visual",
      score: Math.floor(Math.random() * 100),
    },
  ];
  return newScore;
};

const ResultSummary = () => {
  const [score, setScore] = useState<scores>(create_random_score());
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

  const totalScore = Math.floor(
    (score[0].score + score[1].score + score[2].score + score[3].score) / 4
  );

  const score_message = () => {
    if (totalScore < 30) return <p>Bad</p>;
    if (totalScore >= 30 && totalScore < 50) return <p>Mhhm</p>;
    if (totalScore >= 50 && totalScore < 70) return <p>Average</p>;
    if (totalScore >= 70 && totalScore < 90) return <p>Good</p>;
    if (totalScore >= 90 && totalScore <= 100) return <p>Excellent</p>;
  };

  useEffect(() => {
    let d = localStorage.getItem("language");
    console.log(d);
  }, []);

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div className="ResultsSummary">
        <main>
          <div className="general">
            <p>Your Result</p>
            <span className="total-score">
              <b>{totalScore}</b>
              <p> of 100</p>
            </span>
            <p>{score_message()}</p>
            <p className="details">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <div className="reaction">
              <div>
                <img src={reaction} />
                <p>Reaction</p>
              </div>
              <div>
                <p>
                  <b>{score[0].score}</b>/100
                </p>
              </div>
            </div>
            <div className="memory">
              <div>
                <img src={memory} />
                <p>Memory</p>
              </div>
              <div>
                <p>
                  <b>{score[1].score}</b>/100
                </p>
              </div>
            </div>
            <div className="verbal">
              <div>
                <img src={verbal} />
                <p>Verbal</p>
              </div>
              <div>
                <p>
                  <b>{score[2].score}</b>/100
                </p>
              </div>
            </div>
            <div className="visual">
              <div>
                <img src={visual} />
                <p>Visual</p>
              </div>
              <div>
                <p>
                  <b>{score[3].score}</b>/100
                </p>
              </div>
            </div>
            <button onClick={() => setScore(create_random_score())}>
              Continue
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ResultSummary;
