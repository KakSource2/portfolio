import { useState } from "react";
import InteractiveRating from "./challenges/FEM/interactive-rating/InteractiveRating";
import ResultSummary from "./challenges/FEM/result-summary/ResultSummary";
import FCCTributePage from "./challenges/FCC/tribute-page/TributePage";
import FCCSurveyForm from "./challenges/FCC/survey-form/SurveyForm";
import "./cssc.css";
import Login from "./challenges/Unordered/Login/Login";

let CSSC = () => {
  const [display, setDisplay] = useState("FCCSurveyForm");

  const showChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplay(e.target.value);
  };

  return (
    <div className="CSSC">
      <div className="menu">
        <p>Challenge</p>
        <select
          defaultValue="interactive rating"
          onChange={(e) => showChange(e)}
        >
          <option value="results summary">Results Summary</option>
          <option value="interactive rating">Interactive Rating</option>
          <option value="FCCTributePage">FCC - Tribute Page</option>
          <option value="FCCSurveyForm">FCC - Survey Form</option>
          <option value="Login">Login</option>
        </select>
      </div>
      <div className="display">
        {display === "results summary" && <ResultSummary />}
        {display === "interactive rating" && <InteractiveRating />}
        {display === "FCCTributePage" && <FCCTributePage />}
        {display === "FCCSurveyForm" && <FCCSurveyForm />}
        {display === "Login" && <Login />}
      </div>
    </div>
  );
};

export default CSSC;
