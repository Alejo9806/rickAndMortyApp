import { useContext } from "react";
import RickAndMortyContext from "../context/RickAndMortyProvider";

const useRickAndMorty = () => {
    return useContext(RickAndMortyContext);
}

export default useRickAndMorty;