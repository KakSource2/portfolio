import swal from "sweetalert";
import "./search.css";

const Search = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keyword = e.currentTarget.keyword.value;

    if (keyword === "") {
      return swal({
        text: "Debes escribir una palabra clave",
      });
    }

    if (keyword.length < 4) {
      return swal({
        text: "Tienes que escribir más de 4 carácteres",
      });
    }
    console.log(keyword.trim());
  };

  return (
    <form className="TMDB-Search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Escribe una palabra clave..."
        name="keyword"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Search;
