import CardList from "../components/CardList";
import useRickAndMorty from "../hooks/useRickAndMorty";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Home.css";

const Home = () => {

  const { characters, getCharactersForPage } = useRickAndMorty();

  const changePage = (event, value) => {
    getCharactersForPage(value);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src="/src/assets/logo.eab63707.png"
          alt="titulo rick and morty"
          className="img-title"
        />
      </Box>
      <div className="container">
        {characters.results &&
          characters.results.map((character) => (
            <CardList
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              id={character.id}
            />
          ))}
      </div>

      <Stack spacing={2} sx={{ width: "100%", margin: "30px 0" }}>
        <Pagination
          count={characters.info?.pages}
          onChange={changePage}
          color="primary"
          size="smaill"
          className="pagination"
        />
      </Stack>
    </Box>
  );
};

export default Home;
