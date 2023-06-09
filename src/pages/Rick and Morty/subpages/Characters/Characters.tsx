import axios from "axios";
import { Link, useOutletContext, useParams } from "react-router-dom";
import "./characters.css";
import { useQuery } from "@tanstack/react-query";

type results = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: any;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}[];

type info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

const Characters = () => {
  const english: boolean = useOutletContext();
  let characterId = useParams();

  const fetchCharacters = async (id: number | string | undefined) => {
    if (!id) {
      return await axios.get("https://rickandmortyapi.com/api/character");
    }
    return await axios.get(
      "https://rickandmortyapi.com/api/character?page=" + id
    );
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["ram_characters"],
    queryFn: () => fetchCharacters(characterId.id),
  });

  if (isLoading)
    return (
      <div>
        {english
          ? "Loading characters please wait..."
          : "Cargando personajes por favor espere..."}
      </div>
    );

  if (isError) {
    console.log(error);
    return (
      <div>
        {english
          ? "There was an error loading characters."
          : "Hubo un error cargando los personajes."}
      </div>
    );
  }

  const { info, results }: { info: info; results: results } = data.data;

  return (
    <div className="Rick_and_Morty-Characters ">
      <h2>Total characters: {info.count}</h2>
      <main>
        {results.map((item) => {
          const { id, image, name, status, origin, location, species } = item;
          return (
            <div key={id} className="Character">
              <img src={image} />
              <div className="info">
                <div className="personal">
                  <h3>
                    <Link to={`/rick-and-morty/character/${id}`}>{name}</Link>
                  </h3>
                  <div className="status">
                    {status === "Alive" ? (
                      <span className="Alive"></span>
                    ) : (
                      <span className="Dead"></span>
                    )}
                    {status} - {species}
                  </div>
                </div>
                <div>
                  Planet of origin: <br />
                  {origin.name}
                </div>
                <div>
                  <p>
                    Last known location: <br />
                    {location.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Characters;
