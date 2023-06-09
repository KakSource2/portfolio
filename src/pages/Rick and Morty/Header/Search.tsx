import "./search.css";

const Search = ({ english }: { english: boolean }) => {
  return (
    <form className="Search">
      <input
        type="text"
        placeholder={english ? "Write a keyword" : "Escribe una palabra"}
      />
      <button>{english ? "Search" : "Buscar"}</button>
    </form>
  );
};
export default Search;
