import { useRouteError } from "react-router-dom";
import "./error.css";

const Error = () => {
  let error = useRouteError();
  console.log(error);

  return (
    <div className="Error">
      <main>
        <h1>404</h1>
        <p>There was an error with the page you were looking for</p>
      </main>
    </div>
  );
};
export default Error;
