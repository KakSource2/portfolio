import "./listing.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

type movies = {
  title: string;
  overview: string;
  id: number;
  poster_path: string;
};

const Listado = () => {
  const [movieList, setMovieList] = useState<movies[]>([]);
  const navigate = useNavigate();
  const fetched = useRef(false);
  const english = useOutletContext();
  document.title = english ? "TMDB - Listing" : "TMDB - Listado";

  useEffect(() => {
    const token_tmdb = localStorage.getItem("token_tmdb");
    if (fetched.current) return;
    const fetchMovies = () => {
      if (!token_tmdb) return navigate("/tmdb/login");
      fetched.current = true;
      const end_point: string =
        "https://api.themoviedb.org/3/discover/movie?api_key=b4f025717b1adb593d3fe575e5ca5bee&language=es-ES&page=1";
      axios
        .get(end_point)
        .then((apiData) => setMovieList(apiData.data.results))
        .catch((err) =>
          sweetAlert({
            title: "There was a mistake loading! Try again in a few minutes...",
            text: err,
            icon: "error",
          })
        );
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="TMDB-Listing">
        <main>
          {movieList.map((item, index) => {
            return (
              <div key={index}>
                <div className="card">
                  {item.title.length > 17 ? (
                    <h2 style={{ fontSize: "0.8rem" }}>{item.title}</h2>
                  ) : (
                    <h2>{item.title}</h2>
                  )}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    className="card__img"
                    alt="..."
                  />
                  <p title={item.overview} className="card__text">
                    {item.overview.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/tmdb/listing/id/${item.id}`}
                    className="card__link"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Listado;
