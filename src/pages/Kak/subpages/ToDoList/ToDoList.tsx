import { useOutletContext } from "react-router-dom";

const ToDoList = () => {
  const english = useOutletContext();
  return <div>{english ? "To do list" : "Lista de quehaceres"}</div>;
};

export default ToDoList;
