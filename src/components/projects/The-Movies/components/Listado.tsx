import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

type movies = {
  title: string;
  overview: string;
  id: number;
  poster_path: string;
};

const Listado = () => {
  const [movieList, setMovieList] = useState<movies[]>([]);
  const navigator = useNavigate();
  const fetched = useRef(false);
  document.title = "Listado";

  useEffect(() => {
    const token_tmdb = localStorage.getItem("token_tmdb");
    if (fetched.current) return;
    const fetchMovies = () => {
      if (!token_tmdb) return navigator("/movies-tmdb");
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
      <div>
        <div style={{ border: "1px solid black" }}>
          {movieList.map((item, index) => {
            return (
              <div key={index}>
                <div className="card my-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div>
                    <h5>{item.title.substring(0, 30)}</h5>
                    <p title={item.overview} className="card-text">
                      {item.overview.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/detalle/${item.id}`}
                      className="btn btn-primary"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Listado;
