import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import style from "./character.module.scss";
import { useOutletContext, useParams } from "react-router-dom";

const Character = () => {
  const [currPage, setCurrPage] = useState(1);
  let { id } = useParams();
  const english: boolean = useOutletContext();
  let newId = Number(id);
  if (!newId) {
    newId = 1;
  }

  const getCharacter = async (page: number) => {
    if (page > 826 || page < 1) {
      page = 1;
      setCurrPage(1);
    }
    return await axios.get(`https://rickandmortyapi.com/api/character/${page}`);
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["ram_character", currPage],
    queryFn: async () => getCharacter(currPage),
  });

  if (isLoading)
    return (
      <div>
        {english
          ? "Loading character, please wait..."
          : "Cargando personaje, por favor espere."}
        .
      </div>
    );
  if (error) {
    console.log(error);
  }
  if (isError)
    return (
      <div>
        {english
          ? "There was an error loading the character!"
          : "Hubo un error cargando el personaje"}
      </div>
    );

  const {
    image,
    name,
    gender,
    status,
    species,
    location,
    origin,
    episode,
  }: {
    image: string;
    name: string;
    gender: string;
    status: string;
    species: string;
    location: { name: string; url: string };
    origin: { name: string; url: string };
    episode: string[];
  } = data.data;

  return (
    <div className={style.character}>
      <div className={style.card}>
        <div>
          <img src={image} />
        </div>
        <div className={style.card__info}>
          <h1>{name}</h1>
          <div>
            <p>{english ? "Gender" : "Género"}:</p>
            <span>{gender}</span>
          </div>
          <div>
            <p>{english ? "Status" : "Estado"}:</p> <span>{status}</span>
          </div>
          <div>
            <p>{english ? "Species" : "Especie"}:</p> <span>{species}</span>
          </div>
          <div>
            <p>{english ? "Location" : "Localidad"}Location:</p>
            <span>
              <a href={"#"}>{location.name}</a>
            </span>
          </div>
          <p>
            {english ? "Origin" : "Origen"}:
            <span>
              {origin.name === "unknown" ? (
                origin.name
              ) : (
                <a href="#">{origin.name}</a>
              )}
            </span>
          </p>
          <p className={style.card__episodes}>
            {english ? "Seen in episodes" : "Visto en episodios"}
            <span>
              {episode.map((item: string, index: number) => (
                <a key={index} href="#">
                  {index >= 10 ? item.slice(-2) : item.slice(-1)}
                </a>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Character;
