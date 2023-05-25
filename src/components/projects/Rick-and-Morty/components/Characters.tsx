import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setInfo(res.data.info);
        setCharacters(res.data.results);
        console.log(info);
        console.log(characters);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="Characters"></div>;
};

export default Characters;
