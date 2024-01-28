import { useEffect, useState, createContext } from "react";
import { alphabeticalOrder } from "../helpers/alphabeticalOrder";

const RickAndMortyContext = createContext();

const RickAndMortyProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [episode, setEpisode] = useState({});
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const data = await fetch("https://rickandmortyapi.com/api/character");
        const response = await data.json();
        const listOrder = {
          ...response,
          results: alphabeticalOrder(response.results),
        };

        setCharacters(listOrder);
      } catch (error) {
        console.log(error);
      }
    };
    consultarAPI();
  }, []);

  const getCharacter = async (id) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const response = await data.json();
      setCharacter(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getCharactersForPage = async (page) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const response = await data.json();
      const listOrder = {
        ...response,
        results: alphabeticalOrder(response.results),
      };

      setCharacters(listOrder);
    } catch (error) {
      console.log(error);
    }
  };

  const getEpisode = async (episode) => {
    try {
      const data = await fetch(episode);
      const response = await data.json();
      setEpisode(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = [...favorites, id];
    if (favorites.includes(id)) return;

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorite(true);
  };

  const removeToFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = favorites.filter((fav) => fav !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorite(false);
  };

  const isFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(favorites.includes(id));
  };

  return (
    <RickAndMortyContext.Provider
      value={{
        character,
        characters,
        getCharacter,
        getCharactersForPage,
        getEpisode,
        episode,
        addToFavorites,
        removeToFavorites,
        isFavorite,
        favorite,
      }}
    >
      {children}
    </RickAndMortyContext.Provider>
  );
};

export { RickAndMortyProvider };

export default RickAndMortyContext;
