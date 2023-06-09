import { useOutletContext } from "react-router-dom";

const SearchBar = () => {
  const english = useOutletContext();

  return <div>{english ? "Search bar" : "Barra de búsqueda"}</div>;
};
export default SearchBar;
