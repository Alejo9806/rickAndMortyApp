import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import useRickAndMorty from "../hooks/useRickAndMorty";


const CardInfo = ({ id, image, name, status, species, gender, location, favorite, addToFavorites, removeToFavorites }) => {

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: 200 }} image={image} alt={name} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={"bold"}
          >
            Estado:{" "}
            <Typography
              variant="span"
              color="text.secondary"
              fontWeight={"200"}
            >
              {status}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={"bold"}
          >
            Especie:{" "}
            <Typography
              variant="span"
              color="text.secondary"
              fontWeight={"200"}
            >
              {species}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={"bold"}
          >
            Genero:{" "}
            <Typography
              variant="span"
              color="text.secondary"
              fontWeight={"200"}
            >
              {gender}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={"bold"}
          >
            Localización:{" "}
            <Typography
              variant="span"
              color="text.secondary"
              fontWeight={"200"}
            >
              {location}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={"bold"}
          >
            {favorite ? "Remover de favoritos" : "Agregar a favoritos" }
            <Typography
              variant="span"
              color="text.secondary"
              fontWeight={"200"}
            >
              {favorite ? (
                <StarIcon
                  sx={{ verticalAlign: "text-bottom", cursor: "pointer" }}
                  color="primary"
                  titleAccess="Remover de favoritos"
                  onClick={() => removeToFavorites(id)}
                />
              ) : (
                <StarBorderIcon
                  sx={{ verticalAlign: "text-bottom", cursor: "pointer" }}
                  color="primary"
                  titleAccess="Agregar a favoritos"
                  onClick={() => addToFavorites(id)}
                />
              )}
            </Typography>
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default CardInfo;
