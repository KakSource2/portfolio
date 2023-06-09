import axios from "axios";
import style from "./episodes.module.scss";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
type results = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
}[];

const episodeNumbersFormatter = (url: string, index: number) => {
  if (index >= 100)
    return (
      <Link key={index} to={`/rick-and-morty/character/${index}`}>
        {url.slice(-3)}
      </Link>
    );
  if (index >= 10)
    return (
      <Link key={index} to={`/rick-and-morty/character/${index}`}>
        {url.slice(-2)}
      </Link>
    );
  return (
    <Link key={index} to={`/rick-and-morty/character/${index}`}>
      {url.slice(-1)}
    </Link>
  );
};

const Episodes = () => {
  const [currPage, setCurrPage] = useState(1);
  let { id } = useParams();
  const english: boolean = useOutletContext();
  let newId = Number(id);
  if (!newId) {
    newId = 1;
  }

  const getCharacters = async (page: number) => {
    if (page > 42 || page < 1) {
      page = 1;
      setCurrPage(1);
    }
    return await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["ram_episodes", currPage],
    queryFn: () => getCharacters(currPage),
  });

  if (isLoading)
    return (
      <div>
        {english
          ? "Loading episodes... please wait."
          : "Cargando episodios... por favor espere."}
      </div>
    );
  if (isError) {
    console.log(error);
    return (
      <div>
        {english
          ? "There was an error loading episodes."
          : "Hubo un error cargando los episodios."}
      </div>
    );
  }

  const { info, results }: { info: info; results: results } = data.data;

  return (
    <div className={style.episode}>
      <h2>Total episodes: {info.count}</h2>
      <div className={style.navigation}>
        <button onClick={() => setCurrPage((old) => old - 1)}>Prev page</button>
        <button onClick={() => setCurrPage((old) => old + 1)}>Next page</button>
      </div>

      <main className="list">
        {results.map((item) => {
          const { id, episode, name, characters } = item;
          return (
            <div key={id} className="card">
              <div>
                <a href="#">
                  <p>Episode</p> <span>{episode}</span>
                </a>
              </div>
              <div>
                <p>Name</p> <span>{name}</span>
              </div>
              <div>
                <p>Characters</p>
                <span className="card__characters">
                  {characters.map((item, index) =>
                    episodeNumbersFormatter(item, index + 1)
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </main>

      <div className={style.navigation}>
        <button onClick={() => setCurrPage((old) => old - 1)}>Prev page</button>
        <button onClick={() => setCurrPage((old) => old + 1)}>Next page</button>
      </div>
    </div>
  );
};
export default Episodes;
