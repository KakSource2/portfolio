import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type movie =
  | {
      adult: string;
      budged: number;
      genres: { id: number; name: string }[];
      homepage: string;
      id: number;
      original_title: string;
      original_language: string;
      overview: string;
      poster_path: string;
      release_date: string;
      revenue: number;
      status: string;
      popularity: number;
      vote_average: number;
      vote_count: number;
      budget: number;
    }
  | undefined;

const Movie = () => {
  const [movie, setMovie] = useState<movie>();
  const navigate = useNavigate();
  let token = null;
  const movieId = useParams();

  useEffect(() => {
    token = localStorage.getItem("token_tmdb");
    if (!token) return navigate("/tmdb/login");
    fetchMovie();
  }, []);

  const end_point = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=b4f025717b1adb593d3fe575e5ca5bee&language=es-ES`;

  const fetchMovie = () => {
    axios
      .get(end_point)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="title">Titulo: {movie?.original_title}</h2>
      <div className="card">
        <img src={movie?.poster_path} />
        <div>
          <h5>Fecha de estreno: {movie?.release_date}</h5>
          <h5>Reseña: {movie?.vote_average}</h5>
          <p>{movie?.overview}</p>
          <p>{movie?.adult ? "Solo para adultos" : "Apta para todo público"}</p>
          <h5>
            Géneros:
            <ul>
              {movie?.genres.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </h5>
          <p>Popularidad: {movie?.popularity}</p>
          <p>Lenguage original: {movie?.original_language}</p>
          <p>Presupuesto: {movie?.budget}$</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
