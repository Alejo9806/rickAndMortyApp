import { useEffect } from "react";
import useRickAndMorty from "../hooks/useRickAndMorty";
import { useParams, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardInfo from "../components/CardInfo";
import EpisodeCard from "../components/EpisodeCard";

const Character = () => {
  const { id } = useParams();
  const {
    getCharacter,
    character,
    addToFavorites,
    removeToFavorites,
    isFavorite,
    favorite,
  } = useRickAndMorty();


  useEffect(() => {
    getCharacter(id);
    isFavorite(+id);
  }, []);

  return (
    <Box>
      <Typography
        variant="h3"
        color="text.white"
        align="center"
        fontWeight={"700"}
      >
        <Link to="/" className="link">
          {"< Lista de personajes"}
        </Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <CardInfo
          id={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          status={character.status}
          gender={character.gender}
          location={character.location?.name}
          favorite={favorite}
          addToFavorites={addToFavorites}
          removeToFavorites={removeToFavorites}
        />
      </Box>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        fontWeight={"700"}
        sx={{ marginTop: "20px" }}
      >
        {" "}
        Episodios{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {character.episode &&
          character.episode.map((episode, index) => (
            <EpisodeCard urlEpisode={episode} key={index} />
          ))}
      </Box>
    </Box>
  );
};

export default Character;
