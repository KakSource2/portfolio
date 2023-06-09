import style from "./locations.module.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
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
  type: string;
  dimension: string;
  url: string;
}[];

const fontStyle = (text: string) => {
  if (text.length > 17) return { fontSize: "0.8rem" };
};

const Locations = () => {
  const [currPage, setCurrPage] = useState(1);
  let { id } = useParams();
  const english: boolean = useOutletContext();
  let newId = Number(id);
  if (!newId) {
    newId = 1;
  }

  const getLocations = async (page: number) => {
    if (page > 7 || page < 1) {
      page = 1;
      setCurrPage(1);
    }
    return await axios.get(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["ram_locations", currPage],
    queryFn: () => getLocations(currPage),
    keepPreviousData: true,
  });

  if (isLoading)
    return (
      <div>
        {" "}
        {english
          ? "Loading locations... please wait."
          : "Cargando ubicaciones, por favor espere."}
      </div>
    );
  if (isError) {
    console.log(error);
    return (
      <div>
        {english
          ? "There was an error requesting the locations..."
          : "Hubo un error tratando de conseguir las ubicaciones...."}
      </div>
    );
  }

  const { info, results }: { info: info; results: results } = data.data;

  return (
    <main className={style.main}>
      <h2>Total locations: {info.count}</h2>
      <div className={style.navigation}>
        <button onClick={() => setCurrPage((old) => old + 1)}>Prev page</button>
        <button onClick={() => setCurrPage((old) => old - 1)}>
          Next change
        </button>
      </div>
      <div className={style.list}>
        {results?.map((item) => (
          <div key={item.id}>
            <div>
              <p>Planet</p>
              <span style={fontStyle(item.name)}>{item.name}</span>
            </div>
            <div>
              <p>Type</p>
              <span>{item.type}</span>
            </div>
            <div>
              <p>Dimension</p>
              <span>{item.type}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.btns}>
        <button onClick={() => setCurrPage((old) => old + 1)}>Prev page</button>
        <button onClick={() => setCurrPage((old) => old - 1)}>
          Next change
        </button>
      </div>
    </main>
  );
};
export default Locations;
