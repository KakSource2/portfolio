import { useEffect, useRef, useState } from "react";
import "./styles.css";
// import Button from "@mui/material/button";
import Button from "@mui/material/Button";
import { useOutletContext } from "react-router-dom";

const Test = () => {
  const renderCount = useRef(0);
  // const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const [userInput, setUserInput] = useState("");

  const english = useOutletContext();

  useEffect(() => {
    renderCount.current += 1;
    console.log(renderCount);
    console.log(userInput);
  });

  return (
    <div className="Test">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p>{english ? "Username" : "Usuario"}</p>
          <input type={"text"} onChange={(e) => setUserInput(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type={"email"} />
          asd
        </label>
        <label>
          <p>Password</p>
          <input type={"password"} />
        </label>
        <button>Submit</button>
      </form>

      <div>{renderCount.current}</div>

      <Button color="secondary">Hello word?</Button>

      <dialog>
        <form method="dialog">test</form>
      </dialog>
    </div>
  );
};
export default Test;
